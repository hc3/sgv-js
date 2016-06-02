'use strict';

angular.module('dashboard')
	.controller('VeiculoController', VeiculoController);

function VeiculoController(VeiculoService) {

	var vm = this;

	vm.titulo = "";
	vm.veiculos = [];

	function alteraVeic() {

	}

	buscaVeic();

	function buscaVeic() {
		VeiculoService.getAll();
	}

	function buscaTodosVeic() {

	}

	function cadVeic() {

	}

	function removeVeic() {
		
	}

};