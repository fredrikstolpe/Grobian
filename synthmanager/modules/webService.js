var util = require('util');
var express = require("express");
var http = require('http');
var config = require("configure");

var app = express();

module.exports = {
	
	listen: function(){
		var server = http.createServer(app);
		app.use(express.static(util.format("./%s",config.server.publicFolder)));
		app.use('/node_modules', express.static("./node_modules"));
		server.listen(config.server.port);
		console.log(util.format("Server up at port %s",config.server.port));
		return server;
	},

	get: function(path, obj){
		app.get(util.format('/%s',path), function(req, res){
			res.send(obj);
		})		
	}

}