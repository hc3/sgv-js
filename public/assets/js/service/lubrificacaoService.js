'use strict';

angular.module('dashboard')
	.service('LubrificacaoService', LubrificacaoService);

function LubrificacaoService($http) {

	this.getAll = function() {
		const url = "/api/lubri";
		return $http.get(url);
	}

	this.getAllWithPopulate = function() {
		const url = "/api/lubriPopulate";
		return $http.get(url);
	}

	this.insert = function(lubrificacao) {
		const url = "/api/lubri";
		return $http.post(url,lubrificacao);
	}

	this.remove = function(lubrificacao) {
		const url = "/api/lubri/";
		return $http.delete(url+lubrificacao._id,{params:{id:lubrificacao._id}});
	}

	this.update = function(lubrificacao) {

	}
}

