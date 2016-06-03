(function() {
	'use strict';

	angular.module('dashboard')
		.controller('LubrificacaoController', LubrificacaoController);

function LubrificacaoController(VeiculoService) {

	var vm = this;
	vm.titulo = "";
	vm.veiculos = [];
	vm.alteraLub = alteraLub
	vm.buscaLub = buscaLub;
	vm.buscaVeiculos = buscaVeiculos;
	vm.buscaTodasLub = buscaTodasLub;
	vm.cadLub = cadLub;
	vm.removeLub = removeLub;

	function buscaVeiculos() {
		VeiculoService.getAll().success(function(data){
			console.log(data);
			vm.veiculos = data;
		})
		.error(function(data,status) {
			console.log(data);
		});
	}

	function alteraLub() {

	}

	function buscaLub() {

	}

	function buscaTodasLub() {

	}

	function cadLub() {

	}

	function removeLub() {
		
	}

	buscaVeiculos();
};

})();