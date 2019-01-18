/*
* Tubby's Pizzeria
*
* Application entry point
*
*/

// Dependencies
const router = require('./lib/requestHandler');
const path = require('path');

router.loadModules(path.join(__dirname, './lib/routes'),function(err){
    if(!err){
        console.log(router.moduleCount);
        console.log(router);
    }else{
        console.log(err);
    }
})




// Container
const app = {};






// Export module
module.exports = app;