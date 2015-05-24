var util = require('util');
var midi = require('midi');
var q = require('q');

var enums = {
	nrpnValueMsb: 6,
	nrpnValueLsb: 38,
	nrpnNumberLsb: 98,
	nrpnNumberMsb: 99,
	cc: 176,
	pitchbend: 224,
	sysex: 240,
	endOfSysex: 247
}

var midiInput = null;
var midiOutput = null;
var outputChannel = 1;

module.exports = {

	listOutputs: function(){
		var output = new midi.output();
		var portCount = output.getPortCount();
		for (var i = 0; i < portCount; i++){
			console.log(i);
			console.log(output.getPortName(i));
		}
	},

	detectDevice: function(){
		var deferred = q.defer();
		
		var input = new midi.input();
		var portCount = input.getPortCount();
		
		var inputs = [];
		
		var timer = setTimeout(
			function(){
				for (var i = 0; i < inputs.length; i++){
					inputs[i].closePort();
				}
				deferred.reject("Timeout")
			}
		, 30000);

		for (var i = 0; i < portCount; i++){
			inputs[i] = new midi.input();
			inputs[i].openPort(i);
			console.log(i);
			console.log(inputs[i].getPortName(i));
			inputs[i].ignoreTypes(false, true, true);
			inputs[i].on('message', 
				function(portNo){
					return function callback(x, message){
						clearTimeout(timer);
						var channel = 0;
						if (message[0] >= 144 && message[0] < 160){
							channel = message[0] - 143;
						}
						else if (message[0] >= 176 && message[0] < 192){
							channel = message[0] - 175;
						}
						else if (message[0] >= 192 && message[0] < 208){
							channel = message[0] - 191;
						}
						
						for (var i = 0; i < inputs.length; i++)
						{
							inputs[i].closePort();
						}
						deferred.resolve({ port : portNo, channel : channel , name : input.getPortName(portNo) });
					} 
				}(i)
			);
		}
		return deferred.promise;
	},

	openInput: function(portNo, callback){
		midiInput = new midi.input();
		if (midiInput.getPortCount()-1 < portNo){
			console.log("Port not available");
			return;
		}
		midiInput.openPort(portNo);
		midiInput.ignoreTypes(false, true, true);
		midiInput.on('message', function(deltaTime, message) {
			callback(message);
		});
		// TODO Close port
	},
	
	openOutput: function(portNo, channel){
		midiOutput = new midi.output();
		outputChannel = channel;
		if (midiOutput.getPortCount()-1 < portNo){
			console.log("Port not available");
			return;
		}		
		midiOutput.openPort(portNo);
		// TODO Close port
	},
	
	sendCC: function(number, value){
		var cc = enums.cc + (outputChannel - 1);
		value = parseInt(value);
		this.sendMidiMessage([cc, number, value]);
	},

	sendSysex: function(template, number, value){
		value = parseInt(value);
		for (var i = 0; i < template.length; i++){
			if (template[i] == 'c'){
				template[i] = (outputChannel - 1);
			}
			else if (template[i] == 'n'){
				template[i] = number;
			}
			else if (template[i] == 'v'){
				template[i] = value;
			}
		}
		this.sendMidiMessage(template);
	},
	
	sendNrpn: function(number, value, omitValueLsb){
		var cc = enums.cc + (outputChannel - 1);
	    var msbNumber = Math.floor(number / 128);
    	var lsbNumber = number - (msbNumber * 128);
    	this.sendMidiMessage([cc, enums.nrpnNumberMsb, msbNumber]);
    	this.sendMidiMessage([cc, enums.nrpnNumberLsb, lsbNumber]);
    	// TODO send omitValueLsb
    	if(omitValueLsb){
	      	this.sendMidiMessage([cc, enums.nrpnValueMsb, value]);
    	}
    	else{
	      	var msbValue = Math.floor(value / 128);
	      	var lsbValue = value-(msbValue * 128);
	      	this.sendMidiMessage([cc, enums.nrpnValueMsb, msbValue]);
	      	this.sendMidiMessage([cc, enums.nrpnValueLsb, lsbValue]);
    	}
	},

	sendPitchbend: function(value){
		var msbValue = Math.floor(value / 128);
		var lsbValue = value - (msbValue * 128);
		var pitchbend = enums.pitchbend + (outputChannel - 1);
		this.sendMidiMessage([pitchbend, lsbValue, msbValue]);
	},

	sendMidiMessage: function(message){
		console.log(message);
		midiOutput.sendMessage(message);
	}
}