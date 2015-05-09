var socketIo = require('socket.io')

var io = null;
var socket = null;
var listenEvents = [];

var self = this;

module.exports = {

	connected : false,

	listen : function(server, connectCallback, disconnectCallback){
		io = socketIo.listen(server);
		io.on('connection', function(socket){
			socket = socket;
			for (var i = 0; i < listenEvents.length; i++){
				socket.on(listenEvents[i].eventName, listenEvents[i].callback);
			}
			self.connected = true;
			connectCallback(socket);
		  	socket.on('disconnect', function(){
		  		socket = null;
		  		this.connected = false;
		    	disconnectCallback();
		 	});
		});	
	},

	emit : function(eventName, data){
		if (self.connected){
			io.emit(eventName, data);
		}
	},

	on : function(eventName, callback){
		listenEvents.push({ eventName : eventName, callback : callback });
		if (self.connected){
			socket.on(eventName, callback);
		}
	  	/*socket.on('valuechange', function(data){
	  		console.log(data);
	  		// TODO Midi
	  	});*/
	}
}