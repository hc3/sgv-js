'use strict';

angular.module('dashboard')
	.factory('VeiculoService', VeiculoService);

function VeiculoService($http) {

	var service = {
		getAll:getAll
	};

	return service;

	function getAll() {
		const url = "/api/veiculos";
		$http.get(url)
			.then(function(data){
				console.log(data.data);
				return data.data;
			})
			.catch(function(err){
				console.log(err);
			})

	}
}