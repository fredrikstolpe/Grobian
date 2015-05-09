var util = require('util');
var config = require("configure");
var requireFromRoot = require('rfr');

module.exports = {
	
	synth: null,

	loadSynth : function(synthId){
		var path = util.format("%s/%s.js", config.paths.synthFolder, synthId);
 		this.synth = requireFromRoot(path);
 		this.synth.index = [];
		for(var key in this.synth.parameters){
			this.synth.index[this.synth.parameters[key].number] = this.synth.parameters[key];
		}
	}

}