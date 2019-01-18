/*
* HTTP and HTTPS Server
*
*/


// Dependencies
const http = require('http');
const https =  require('https');
const fs = require('fs');
const path = require('path');



// Container
const server = {};

// Instantiate HTTP Server object
server.httpServer = http.createServer(function(req, res){
    server.requestServer(req, res);
});

//Instantiate HTTPS server object
server.httpsServerOptions = {
    'key': fs.readFileSync(path.join(__dirname, '/../certs/key.pem')),
    'cert': fs.readFileSync(path.join(__dirname, '/../certs/cert.pem'))
};
server.httpsServer = https.createServer(server.httpsServerOptions, function (req, res) {
    server.requestServer(req, res);
});


// HTTP Request Server - Used to handle the request
server.requestServer = function(req, res){

};

// Initialise Server - Starting both HTTP and HTTPS Servers
// Parameters:
//      http port (defaults to 3000)
//      https port {defaults to 3001)
server.init = function(httpPort, httpsPort){

};

// Export module
module.exports = server;