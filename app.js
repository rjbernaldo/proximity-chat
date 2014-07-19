var express = require('express')
	// start an instance of express
	, app			= express()
	// set the port according to ENV port
	, port 		= process.env.PORT || 8080
	, io 			= require('socket.io').listen(app.listen(port));

// require config.js file and pass in app and io
require('./config')(app, io);
// require routes.js file and pass in app and io
require('./routes')(app, io);

console.log("Node server running on port: " + port);
