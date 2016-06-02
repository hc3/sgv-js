'use strict';

angular.module('dashboard')
	.service('VeiculoService', VeiculoService);

function VeiculoService($http) {

	var service = {
		getAll:getAll
	};

	return service;

	function getAll() {
		const url = "/api/veiculos";
		const method = "GET";
		$http({
			url:url,
			method:method
		})
		.success(function(data){
			return data;
		})
		error(function(err){
			console.log("erro:", err);
		});
	}
}