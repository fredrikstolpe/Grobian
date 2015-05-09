var util = require('util');
var config = require("configure");
var jsonFile = require('jsonfile');

module.exports = {

	patch: null,

	loadPatch: function(patchId){
		var path = util.format("./%s/%s.json", config.paths.patchFolder, patchId);
		this.patch = jsonFile.readFileSync(path);
	},

	createInitPatch: function(synth){
		patch = { synth : synth.id };
		patch.parameters = {};
		for(var key in synth.parameters){
			if (synth.parameters[key].defaultValue){
				patch.parameters[key] = synth.parameters[key].defaultValue
			}
			else{
				patch.parameters[key] = 0;				
			}
		}
		this.patch = patch;
	}

}