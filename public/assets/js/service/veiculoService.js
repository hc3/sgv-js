'use strict';

angular.module('dashboard')
	.service('VeiculoService', VeiculoService);

function VeiculoService($http) {

	this.getAll = function() {
		const url = "/api/veiculos";
		return $http.get(url);
	}

	this.getOne = function(id) {
		const url = "/api/veiculo/";
		return $http.get(url+id,{params:{id:id}});
	}

	this.getAllWithPopulate = function() {
		const url = "/api/lubriPopulate";
		return $http.get(url);
	}

	this.insert = function(veiculo) {
		const url = "/api/veiculo";
		return $http.post(url,veiculo);
	}

	this.remove = function(veiculo) {
		const url = "/api/veiculos/";
		return $http.delete(url+veiculo._id,{params:{id:veiculo._id}});
	}

	this.update = function(veiculo) {

	}
}
