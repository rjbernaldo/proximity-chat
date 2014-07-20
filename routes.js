var gravatar = require('gravatar');

module.exports = function(app, io) {
	app.get('/', function(req,res) {
		res.render('home');
	});

	app.get('/room/:id', function(req,res) {
		res.render('chat');
	});

	var chat = io.of('/socket').on('connection', function(socket) {
		socket.on('load',function(data){});

		socket.on('login', function(data) {});

		socket.on('disconnect', function() {});

		socket.on('msg', function(data){});
	});
}
