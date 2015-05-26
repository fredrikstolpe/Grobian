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
	},

	getParameter: function(parameterId){
		return this.synth.parameters[parameterId];
	},

	getSysexMessageTemplate: function(parameterId){
		var parameter = this.getParameter(parameterId);

		if (parameter == null){
			return null;
		}

		if (parameter.group != null && this.synth.groups[parameter.group] != null){
			var group = this.synth.groups[parameter.group];
			if (group.sysexMessageTemplate != null){
				return group.sysexMessageTemplate.slice();
			}
		}
		return this.synth.sysexMessageTemplate.slice();
	},
	
	getSysexDumpTemplate: function(){
		return this.synth.sysexDumpMessageTemplate.slice();
	},	
	
	// Translate incoming midi value from controller/sockets to the synth parameter value
	translateValueForParameter : function(parameter, value, controllerParameterMaxValue){
		
		// TODO translate cc to nrpn etc...
		
		// If parameter has values (select options), translate to the corresponding value instead
		// of the incoming midi value
		if (parameter.items != null){
			var inputValuePerItem = Math.floor((controllerParameterMaxValue+1)/parameter.items.length);
			var tempValue = parameter.items[0].value;
			for (var i = 0; i < parameter.items.length; i++) {
				if(value < i * inputValuePerItem){
					break;
				}
				tempValue = parameter.items[i].value;
			}
			value = tempValue;
		}	
		return value;	
	}

};