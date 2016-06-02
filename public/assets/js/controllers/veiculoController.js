'use strict';

angular.module('dashboard')
	.controller('VeiculoController', VeiculoController);

function VeiculoController(VeiculoService) {

	var vm = this;

	vm.titulo = "";
	vm.veiculos = [];
	function alteraVeic() {

	}

	reload();

	function reload() {
		return buscaVeic().then(function() {
			console.log("listando");
		});
	}

	function buscaVeic() {

		return VeiculoService.getAll()
		.then(function(data){
			vm.veiculos = data;
			return vm.veiculos;
		});
	}

	function buscaTodosVeic() {

	}

	function cadVeic() {

	}

	function removeVeic() {
		
	}

	vm.buscaVeic();

};