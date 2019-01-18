/*
* Request Handler
* At startup dynamically loads all available routes from routes directory and adds them to a requestHandler object.
*
*/

// Dependencies
const fs = require('fs');
const path = require('path');
const util = require('util');

const debug = util.debuglog('requestHandler');

// Container Object
const router = {};

// Module Counter variable
router.moduleCount = 0;
router.routes = {};


// Load the modules with a given directory
router.loadModules = function(dir, callback){
    const dirPath = typeof (dir) === 'string' ? dir : false;
    debug(`Loading modules in directory: ${dirPath}`)

    if(dirPath){
        fs.lstat(dirPath, function(err, stat) {
            if (!err && stat.isDirectory()) {
                fs.readdir(dirPath, function (err, files) {
                    if (!err && files.length > 0) {

                        // @TODO - refactor to exclude sub folders

                        let filePath = '';
                        let moduleName = '';

                        for (let i = 0; i < files.length; i += 1) {

                            // Check file has a .js extension
                            if (files[i].indexOf('.js') > -1) {

                                // Build full path to module file
                                filePath = path.join(dirPath, files[i]);

                                //Load Module into container object
                                moduleName = files[i].replace('.js', '');
                                router.routes[moduleName] = require(filePath);

                                router.moduleCount += 1;
                                console.log('Module: ' + moduleName + ' loaded');
                            }
                        }
                        callback(false);
                    } else {
                        callback('Could not find any modules files to load - directory empty');
                    }
                });
            } else {
                callback('Invalid module directory path');
            }
        });
    } else {
        callback('Parameter missing or invalid');
    }
};






// Export Module
module.exports = router;