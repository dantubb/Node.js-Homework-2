/*
* Tubby's Pizzeria
*
* Application entry point
*
*/

// Dependencies
const requestHandler = require('./lib/requestHandler');
const path = require('path');

requestHandler.loadModules(path.join(__dirname, './lib/routes'),function(err){
    if(!err){
        console.log(requestHandler.moduleCount);
        console.log(requestHandler);
    }else{
        console.log(err);
    }
})




// Container
const app = {};






// Export module
module.exports = app;