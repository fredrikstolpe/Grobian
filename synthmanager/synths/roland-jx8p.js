module.exports = {
	id: 'roland-jx8p',
	name: 'Roland JX8P',
	midiType: 'sysex',
	sysexMessageTemplate: [ 240, 65, 54, 'c', 33, 32, 1, 'n', 'v', 247 ],
	sysexDumpMessageTemplate: [ 240, 65, 53, 'c', 33, 32, 1, 'v', 247 ],
	parameters: {
		patchNameCharacter1: {
			label: 'Patch name, character 1',
			group: 'patchName',
			number: 0,
		},
		patchNameCharacter2: {
			label: 'Patch name, character 2',
			group: 'patchName',
			number: 1,
		},
		patchNameCharacter3: {
			label: 'Patch name, character 3',
			group: 'patchName',
			number: 2,
		},
		patchNameCharacter4: {
			label: 'Patch name, character 4',
			group: 'patchName',
			number: 3,
		},
		patchNameCharacter5: {
			label: 'Patch name, character 5',
			group: 'patchName',
			number: 4,
		},
		patchNameCharacter6: {
			label: 'Patch name, character 6',
			group: 'patchName',
			number: 5,
		},
		patchNameCharacter7: {
			label: 'Patch name, character 7',
			group: 'patchName',
			number: 6,
		},
		patchNameCharacter8: {
			label: 'Patch name, character 8',
			group: 'patchName',
			number: 7,
		},
		patchNameCharacter9: {
			label: 'Patch name, character 9',
			group: 'patchName',
			number: 8,
		},
		patchNameCharacter10: {
			label: 'Patch name, character 10',
			group: 'patchName',
			number: 9,
		},
		undefinedParameter10: {
			label: 'Undefined parameter 10',
			number: 10
		},
		dco1Range: {
			label: 'DCO 1 Range',
			group: 'dco1',
			number: 11,
			items: [
				{ value: 0, label: '16\'' },
				{ value: 32, label: '8\'' },
				{ value: 64, label: '4\'' },
				{ value: 96, label: '2\'' }
			],
			randomizeMax: 3
		},
		dco1Waveform: {
			label: 'DCO 1 Waveform',
			group: 'dco1',
			number: 12,
			items: [
				{ value: 0, label: 'Noise' },
				{ value: 32, label: 'Square' },
				{ value: 64, label: 'Pulse' },
				{ value: 96, label: 'Saw' }
			]
		},
		dco1Tune: {
			label: 'DCO 1 Tune',
			group: 'dco1',
			number: 13,
			displayminvalue: -64,
			displaymaxvalue: 63,
			randomizeMin: 64,
			randomizeMax: 64
		},
		dco1LfoModDepth: {
			label: 'DCO 1 LFO mod depth',
			group: 'dco1',
			number: 14,
			randomizeMax: 10
		},
		dco1EnvModDepth: {
			label: 'DCO 1 env mod depth',
			group: 'dco1',
			number: 15,
			randomizeMax: 10
		},
		dco2Range: {
			label: 'DCO 2 Range',
			group: 'dco2',
			number: 16,
			items: [
				{ value: 0, label: '16\'' },
				{ value: 32, label: '8\'' },
				{ value: 64, label: '4\'' },
				{ value: 96, label: '2\'' }
			],
			randomizeMax: 3
		},
		dco2Waveform: {
			label: 'DCO 2 Waveform',
			group: 'dco2',
			number: 17,
			items: [
				{ value: 0, label: 'Noise' },
				{ value: 32, label: 'Square' },
				{ value: 64, label: 'Pulse' },
				{ value: 96, label: 'Saw' }
			]
		},
		dco2CrossMod: {
			label: 'DCO 2 Cross modulation',
			group: 'dco2',
			number: 18,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: 'Sync 1' },
				{ value: 64, label: 'Sync 2' },
				{ value: 96, label: 'Xmod' }
			]
		},
		dco2Tune: {
			label: 'DCO 2 Tune',
			group: 'dco2',
			number: 19,
			displayminvalue: -64,
			displaymaxvalue: 63,
			randomizeMin: 64,
			randomizeMax: 64        
		},
		dco2FineTune: {
			label: 'DCO 2 Fine tune',
			group: 'dco2',
			number: 20,
			displayminvalue: -64,
			displaymaxvalue: 63,
			randomizeMin: 44,
			randomizeMax: 84        
		},
		dco2LfoModDepth: {
			label: 'DCO 2 LFO mod depth',
			group: 'dco2',
			number: 21,
			randomizeMax: 10
		},
		dco2EnvModDepth: {
			label: 'DCO 2 env mod depth',
			group: 'dco2',
			number: 22,
			randomizeMax: 10
		},
		undefinedParameter23: {
			label: 'Undefined parameter 23',
			number: 23
		},
		undefinedParameter24: {
			label: 'Undefined parameter 24',
			number: 24
		},
		undefinedParameter25: {
			label: 'Undefined parameter 25',
			number: 25
		},	
		dcoEnvDynamics: {
			label: 'DCO Dynamics',
			group: 'dcoEnvMod',
			number: 26,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			]
		},
		dcoEnvMode: {
			label: 'DCO Env mode',
			group: 'dcoEnvMod',
			number: 27,
			items: [
				{ value: 0, label: 'Env 2 (inverted)' },
				{ value: 32, label: 'Env 2' },
				{ value: 64, label: 'Env 1 (inverted)' },
				{ value: 96, label: 'Env 1' }
			]
		},
		dco1Level: {
			label: 'DCO 1 level',
			group: 'mixer',
			number: 28,
			defaultvalue: 127
		},
		dco2Level: {
			label: 'DCO 2 level',
			group: 'mixer',
			number: 29,
			defaultvalue: 127
		},
		mixerEnvModDepth: {
			label: 'Env mod depth',
			group: 'mixer',
			number: 30
		},
		mixerEnvDynamics: {
			label: 'Mixer env dynamics',
			group: 'mixer',
			number: 31,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			]
		},
		mixerEnvMode: {
			label: 'Mixer env mode',
			group: 'mixer',
			number: 32,
			items: [
				{ value: 0, label: 'Env 2 (inverted)' },
				{ value: 32, label: 'Env 2' },
				{ value: 64, label: 'Env 1 (inverted)' },
				{ value: 96, label: 'Env 1' }
			]
		},
		hpfCutoff: {
			label: 'HPF cutoff',
			group: 'filter',
			number: 33,
			items: [
				{ value: 0, label: '0' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			]
		},
		vcfCutoff: {
			label: 'VCF Cutoff',
			group: 'filter',
			number: 34,
			randomizeMin: 20
		},
		vcfResonance: {
			label: 'VCF Resonance',
			group: 'filter',
			number: 35
		},
		vcfLfoModDepth: {
			label: 'VFC LFO mod depth',
			group: 'filter',
			number: 36
		},
		vcfEnvModDepth: {
			label: 'Env mod depth',
			group: 'filter',
			number: 37,
			defaultvalue: 95
		},
		vcfKeyFollow: {
			label: 'VCF key follow',
			group: 'filter',
			number: 38,
			defaultvalue: 113
		},
		vcfEnvDynamics: {
			label: 'VCF env ynamics',
			group: 'filter',
			number: 39,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			]
		},
		vcfEnvMode: {
			label: 'VCF env mode',
			group: 'filter',
			number: 40,
			items: [
				{ value: 0, label: 'Env 2 (inverted)' },
				{ value: 32, label: 'Env 2' },
				{ value: 64, label: 'Env 1 (inverted)' },
				{ value: 96, label: 'Env 1' }
			],
			randomizeMin: 4
		},
		vcaLevel: {
			label: 'VCA level',
			group: 'amplifier',
			number: 41,
			randomizeMin: 100
		},
		vcaEnvDynamics: {
			label: 'VCA env dynamics',
			group: 'amplifier',
			number: 42,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			],
			randomizeMax: 3
		},
		chorus: {
			label: 'Chorus',
			group: 'chorus',
			number: 43,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' }
			]
		},
		lfoWaveform: {
			label: 'LFO waveform',
			group: 'lfo',
			number: 44,
			items: [
				{ value: 0, label: 'Random' },
				{ value: 32, label: 'Square' },
				{ value: 64, label: 'Sine' }
			]
		},
		lfoDelay: {
			label: 'LFO delay',
			group: 'lfo',
			number: 45,
			defaultvalue: 50
		},
		lfoRate: {
			label: 'LFO Rate',
			group: 'lfo',
			number: 46,
			defaultvalue: 92
		},		
		env1Attack: {
			label: 'Env 1 attack',
			group: 'envelope1',
			number: 47,
			randomizeMax: 20,
		},
		env1Decay: {
			label: 'Env 1 decay',
			group: 'envelope1',
			number: 48,
			defaultvalue: 30
		},
		env1Sustain: {
			label: 'Env 1 sustain',
			group: 'envelope1',
			number: 49,
			defaultvalue: 50
		},
		env1Release: {
			label: 'Env 1 release',
			group: 'envelope1',
			number: 50,
			randomizeMax: 100
		},
		env1KeyFollow: {
			label: 'Env 1 key follow',
			group: 'envelope1',
			number: 51,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			]
		},
		env2Attack: {
			label: 'Env 2 attack',
			group: 'envelope2',
			number: 52,
			randomizeMax: 20
		},
		env2Decay: {
			label: 'Env 2 decay',
			group: 'envelope2',
			number: 53,
			defaultvalue: 34
		},
		env2Sustain: {
			label: 'Env 2 sustain',
			group: 'envelope2',
			number: 54,
			defaultvalue: 24
		},
		env2Release: {
			label: 'Env 2 Release',
			group: 'envelope2',
			number: 55,
			randomizeMax: 100
		},
		env2KeyFollow: {
			label: 'Env 2 key follow',
			group: 'envelope2',
			number: 56,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 32, label: '1' },
				{ value: 64, label: '2' },
				{ value: 96, label: '3' }
			]
		},
		undefinedParameter57: {
			label: 'Undefined parameter 57',
			number: 57
		},		
		vcaEnvMode: {
			label: 'VCA Env mode',
			group: 'amplifier',
			number: 58,
			items: [
				{ value: 0, label: 'Gate' },
				{ value: 64, label: 'Env 2' }
			]
		},		
		bendRange: {
			label: 'Bend range',
			group: 'patch',
			number: 0,
			items: [
				{ value: 0, label: '2 semi tones' },
				{ value: 32, label: '3 semi tones' },
				{ value: 64, label: '4 semi tones' },
				{ value: 96, label: '7 semi tones' }
			]
		},
		portamentoTime: {
			label: 'Portamento time',
			group: 'patch',
			number: 1,
		},
		portamento: {
			label: 'Portamento',
			group: 'patch',
			number: 2,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 64, label: 'On' }
			]
		},
		assignMode: {
			label: 'Assign mode',
			group: 'patch',
			number: 3,
			items: [
				{ value: 0, label: 'Poly-1' },
				{ value: 1, label: 'Unison-1' },
				{ value: 2, label: 'Solo-1' },
				{ value: 4, label: 'Poly-2' },
				{ value: 5, label: 'Unison-2' },
				{ value: 6, label: 'Solo-2' }
			]
		},
		aftertouch: {
			label: 'Aftertouch',
			group: 'patch',
			number: 4,
			items: [
				{ value: 0, label: 'Off' },
				{ value: 1, label: 'Vibrato' },
				{ value: 2, label: 'Brilliance' },
				{ value: 3, label: 'Vibrato + brilliance' },
				{ value: 4, label: 'Volume' },
				{ value: 5, label: 'Vibrato + volume' },
				{ value: 6, label: 'Brilliance + volume' },
				{ value: 7, label: 'Vibrato + brilliance + volume' }
			]
		},
		bendLfoDepth: {
			label: 'Bend LFO depth',
			group: 'patch',
			number: 5
		},
		unisonDetune: {
			label: 'Unison detune',
			group: 'patch',
			number: 6
		},
	},
	groups: {
		'patchName': {
			label: 'Patch name'
		},		
		'dco1': {
			label: 'DCO 1'
		},
		'dco2': {
			label: 'DCO 2'
		},
		'dcoEnvMod': {
			label: 'DCO env mod'
		},
		'lfo': {
			label: 'LFO'
		},		
		'mixer': {
			label: 'Mixer'
		},
		'filter': {
			label: 'Filter'
		},
		'amplifier': {
			label: 'Amplifier'
		},		
		'chorus': {
			label: 'Chorus'
		},
		'envelope1': {
			label: 'Envelope 1'
		},
		'envelope2': {
			label: 'Envelope 2'
		},
		'patch': {
			label: 'Patch',
			sysexMessageTemplate: [ 240, 65, 54, 'c', 33, 48, 1, 'n', 'v', 247 ],
			sysexDumpMessageTemplate: [ 240, 65, 53, 'c', 33, 32, 1, 'v', 247 ]
		}
	},	
	patchNameParameters: [
		'patchNameCharacter1',
		'patchNameCharacter2',
		'patchNameCharacter3',
		'patchNameCharacter4',
		'patchNameCharacter5',
		'patchNameCharacter6',
		'patchNameCharacter7',
		'patchNameCharacter8',
		'patchNameCharacter9',
		'patchNameCharacter10'
	],
	sysexDumpParameters : [
		'patchNameCharacter1',
		'patchNameCharacter2',
		'patchNameCharacter3',
		'patchNameCharacter4',
		'patchNameCharacter5',
		'patchNameCharacter6',
		'patchNameCharacter7',
		'patchNameCharacter8',
		'patchNameCharacter9',
		'patchNameCharacter10',
		'undefinedParameter10',
		'dco1Range',
		'dco1Waveform',
		'dco1Tune',
		'dco1LfoModDepth',
		'dco1EnvModDepth',
		'undefinedParameter23',
		'undefinedParameter24',
		'undefinedParameter25',				
		'dco2Range',
		'dco2Waveform',
		'dco2CrossMod',
		'dco2Tune',
		'dco2FineTune',
		'dco2LfoModDepth',
		'dco2EnvModDepth',
		'dcoEnvDynamics',
		'dcoEnvMode',
		'dco1Level',
		'dco2Level',
		'mixerEnvModDepth',
		'mixerEnvDynamics',
		'mixerEnvMode',
		'hpfCutoff',
		'vcfCutoff',
		'vcfResonance',
		'vcfLfoModDepth',
		'vcfEnvModDepth',
		'vcfKeyFollow',
		'vcfEnvDynamics',
		'vcfEnvMode',
		'vcaLevel',
		'vcaEnvDynamics',
		'chorus',
		'lfoWaveform',
		'lfoDelay',
		'lfoRate',
		'env1Attack',
		'env1Decay',
		'env1Sustain',
		'env1Release',
		'env1KeyFollow',
		'env2Attack',
		'env2Decay',
		'env2Sustain',
		'env2Release',
		'env2KeyFollow',
		'undefinedParameter57',
		'vcaEnvMode'		
	]
};