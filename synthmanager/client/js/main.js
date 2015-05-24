var app = angular.module('Grobian', ['ngSlider']);

var parameterOptions = function(parameter) {
	var maxValue = 127;
	var step = 1;
	if (parameter.items != null){
		maxValue = parameter.items[parameter.items.length-1].value;
		step = parameter.items[1].value;
	}
	return {
		"from": 0,
		"to": maxValue,
		"step": step,
		"skin": "round",
		"realtime": true ,
		"floor": true,
		"css": { 
			"background": {"background-color": "black"},
			"before": {"background-color": "black"},
			"default": {"background-color": "black"},
			"after": {"background-color": "black"}
		}
	};
};

app.controller('MainController', ['$scope', '$http', 'socket', function($scope, $http, socket){
	
	socket.on('parameterChange', function(data){
		console.log(data);
		$scope.parameters[data.parameter].value = data.value;
	});

	$http.get('/getsynth').success(function(data, status, headers, config){
		var synth = data;
		$http.get('/getpatch').success(function(data, status, headers, config){
			$scope.patch = data;
			$scope.parameters = {};
			for(var key in synth.parameters){
				var parameter = synth.parameters[key];
				console.log(key);
				console.log(parameterOptions(parameter));
				$scope.parameters[key] = { parameter: key, value: $scope.patch.parameters[key], label: parameter.label, options: parameterOptions(parameter) };
				$scope.$watch('parameters[\'' + key + '\']', function(newValue, oldValue){
					if (oldValue != null){
						socket.emit('parameterChange', { parameter: newValue.parameter, value: newValue.value });
					}
				},true);
			}
		});
	});
}]);

app.factory('socket', function($rootScope){
	var socket = io();
	return {
		on: function(eventName, callback){
			socket.on(eventName, function(){
				var args = arguments;
				$rootScope.$apply(function(){
					callback.apply(socket, args);
				});
			});
		},
		emit: function(eventName, data, callback){
			socket.emit(eventName, data, function(){
				var args = arguments;
				$rootScope.$apply(function(){
					if (callback){
						callback.apply(socket, args);
					}
				});
			});
		}
	}
});