var util = require('util');
var config = require("configure");
var jsonFile = require('jsonfile');

module.exports = {

	patch: null,

	loadPatch: function(patchId){
		var path = util.format("./%s/%s.json", config.paths.patchFolder, patchId);
		this.patch = jsonFile.readFileSync(path);
	},

	savePatch: function(synthId, patchId){
		var path = util.format("./%s/%s/%s.json", config.paths.patchFolder, synthId, patchId);
		jsonFile.writeFileSync(path, this.patch);
	},

	// TODO replace with init patch for each synth
	// TODO nrpn
	createInitPatch: function(synth){
		var patch = { synth : synth.id };
		patch.parameters = {};
		for(var key in synth.parameters){
			var parameter = synth.parameters[key];
			if (parameter.defaultValue){
				patch.parameters[key] = parameter.defaultValue;
			}
			else if (parameter.items != null){
				patch.parameters[key] = parameter.items[Math.floor(parameter.items.length/2)].value;
			}
			else{
				patch.parameters[key] = 64;				
			}
		}
		this.patch = patch;
	}

}