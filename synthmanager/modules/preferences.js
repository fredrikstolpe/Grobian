var util = require('util');
var config = require('configure');
var nconf = require('nconf');

nconf.file({ file: util.format('./%s',config.preferencesFile) });

/*preferences.set("midi:in:port", 0);
preferences.set("midi:in:portName", "MS-20 Controller IN");
preferences.set("midi:in:channel", 1);
preferences.set("midi:out:port", 1);
preferences.set("midi:out:portName", "UM-1");
preferences.set("midi:out:channel", 1);
preferences.save();
console.log(preferences.get("gurka"));
*/

module.exports = {
	get : function(name){
		return nconf.get(name);
	},
	set : function(name, value){
		nconf.set(name, value);
	},
	save : function(){
		nconf.save(function(err){
			if (err){
				console.error(err.message);
			}
		});
	}
}