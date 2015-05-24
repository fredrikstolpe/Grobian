var requireFromRoot = require('rfr');
var preferences = requireFromRoot('modules/preferences');
var webService = requireFromRoot('modules/webService');
var sockets = requireFromRoot('modules/sockets');
var midi = requireFromRoot('modules/midi');
var synthHandler = requireFromRoot('modules/synthHandler');
var patchHandler = requireFromRoot('modules/patchHandler');
var mappingHandler = requireFromRoot('modules/mappingHandler');
var controllerHandler = requireFromRoot('modules/controllerHandler');

var server = webService.listen();

sockets.on('parameterChange', handleSocketParameterChange);

sockets.listen(server, socketConnect, socketDisconnect);

midi.openInput(preferences.get("midi:in:port"), handleMidiInput);

midi.openOutput(preferences.get("midi:out:port"), preferences.get("midi:out:channel"));

synthHandler.loadSynth(preferences.get("synth"));

patchHandler.createInitPatch(synthHandler.synth);

mappingHandler.loadMapping(preferences.get("mapping"));

controllerHandler.loadController(preferences.get("controller"));

webService.get('getsynth', synthHandler.synth);

webService.get('getmapping', mappingHandler.mapping);

webService.get('getpatch', patchHandler.patch);

process.stdin.on('data', function(chunk){
	var input = chunk.toString().trim();
	if (input.indexOf('save ') == 0){
		var filename = input.substring(5,input.length);
		patchHandler.savePatch(synthHandler.synth.id, filename);
	}
});

function socketConnect(){
	console.log("Connect");
}

function socketDisconnect(){
	console.log("Disconnect");	
}

function handleSocketParameterChange(data){
	if (data == null || data.parameter == null || data.parameter == '' || isNaN(data.value)){
		return;
	}

	var parameterId = data.parameter;
	var value = parseInt(data.value);
	
	var parameter = synthHandler.getParameter(parameterId);
		
	var controllerMaxValue = 127;
	
	//value = synthHandler.translateValueForParameter(parameter, value, controllerMaxValue);

	patchHandler.patch.parameters[parameterId] = value;

	if (synthHandler.synth.midiType == 'sysex'){
		var template = synthHandler.getSysexMessageTemplate(parameterId);
		if (parameter != null && template != null){
			midi.sendSysex(template,parameter.number,value);
		}
	}
}

function handleMidiInput(message){
	console.log(message);
	var number = parseInt(message[1]);
	var value = parseInt(message[2]);

	var parameterId = mappingHandler.mapping.parameters[number];

	if (parameterId){
		
		var parameter = synthHandler.getParameter(parameterId);
		
		console.log(parameterId);
		console.log(parameter.label);
		
		// TODO Nrpn from controller etc
		//if (controllerHandler.controller.midiType == "nrpm"){	
		var controllerMaxValue = 127;
		
		value = synthHandler.translateValueForParameter(parameter, value, controllerMaxValue);
				
		patchHandler.patch.parameters[parameterId] = value;
		
		if (synthHandler.synth.midiType == 'sysex'){
			var template = synthHandler.getSysexMessageTemplate(parameterId);
			if (parameter != null && template != null){
				midi.sendSysex(template, parameter.number, value);
			}
		}
		
		// TODO When changing parameters via sockets from midi in angular 
		// detects changes and sends back
		// sockets.emit('parameterChange', {parameter: parameterId, value: inValue});
	}
}

/*
TODO Close midi ports on exit?
process.on('SIGINT', function() {
	//input.closePort();
	process.exit();
});
*/

