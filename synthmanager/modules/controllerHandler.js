var util = require('util');
var config = require("configure");
var jsonFile = require('jsonfile');

module.exports = {
		
	controller: null,
	
	loadController : function(controllerId){
		var path = util.format("./%s/%s.json", config.paths.controllerFolder, controllerId);
		this.controller = jsonFile.readFileSync(path);
	}
	
};