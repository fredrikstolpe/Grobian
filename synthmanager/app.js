var requireFromRoot = require('rfr');
var preferences = requireFromRoot('modules/preferences');
var webService = requireFromRoot('modules/webService');
var sockets = requireFromRoot('modules/sockets');
var midi = requireFromRoot('modules/midi');
var synthHandler = requireFromRoot('modules/synthHandler');
var patchHandler = requireFromRoot('modules/patchHandler');
var mappingHandler = requireFromRoot('modules/mappingHandler');

var server = webService.listen();

sockets.on('parameterChange', handleSocketParameterChange);

sockets.listen(server, socketConnect, socketDisconnect);

midi.openInput(preferences.get("midi:in:port"), handleMidiInput);

midi.openOutput(preferences.get("midi:out:port"), preferences.get("midi:out:channel"));

synthHandler.loadSynth(preferences.get("synth"));

patchHandler.createInitPatch(synthHandler.synth);

mappingHandler.loadMapping(preferences.get("mapping"));

webService.get('getsynth', synthHandler.synth);

webService.get('getmapping', mappingHandler.mapping);

console.log(patchHandler.patch);

webService.get('getpatch', patchHandler.patch);

function socketConnect(){
	console.log("Connect");
}

function socketDisconnect(){
	console.log("Disconnect");	
}

function handleSocketParameterChange(data){
	patchHandler.patch.parameters[data.parameter] = data.value;
	midi.sendCC(synthHandler.synth.parameters[data.parameter].number, data.value);
}

function handleMidiInput(message){
	var number = message[1];
	var value = message[2];
	var parameterId = mappingHandler.mapping.parameters[number];
	if (parameterId){
		patchHandler.patch.parameters[parameterId] = value;
		midi.sendCC(synthHandler.synth.parameters[parameterId].number, value);
		sockets.emit('parameterChange', {parameter: parameterId, value: value});
	}
}

/*
TODO Close midi ports on exit?
process.on('SIGINT', function() {
	//input.closePort();
	process.exit();
});
*/

