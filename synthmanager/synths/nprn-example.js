module.exports = {
	name: 'NRPM',
	midi: {
		type: 'nrpn',
		omitValueLsb : true;
	},
	parameters: {
		dco1Range: {
        	label: "DCO 1 Range",
        	number: 11,
        	defaultValue: 32,
        	randomizeMax: 2,
			items: [
				{ value: 0, label: '16' },
				{ value: 32, label: '8' },
				{ value: 64, label: '4' },
				{ value: 96, label: '2' }
			]
		},
		vcfCutoff: {
        	name: "VCF Cutoff",
        	number: 34,
        	defaultValue: 50,
        	randomizeMin: 20
		},
		dco1Waveform: {
			label: 'DCO 1 Waveform',
			number: 12,
			items : [
				{ value: 0, label: 'Noise' },
				{ value: 32, label: 'Square' },
				{ value: 64, label: 'Pulse' },
				{ value: 96, label: 'Saw' }
			]
		}
	}
}