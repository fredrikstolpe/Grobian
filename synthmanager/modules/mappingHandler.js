var util = require('util');
var config = require("configure");
var jsonFile = require('jsonfile');

module.exports = {

	mapping: null,
	
	loadMapping : function(mappingId){
		var path = util.format("./%s/%s.json", config.paths.mappingFolder, mappingId);
		this.mapping = jsonFile.readFileSync(path);
	}

}