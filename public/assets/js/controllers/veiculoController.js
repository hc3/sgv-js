(function() {
	'use strict';

	angular.module('dashboard')
		.controller('VeiculoController', VeiculoController);

function VeiculoController() {

	var vm = this;
	vm.titulo = "";

	vm.alteraVeic = alteraVeic
	vm.buscaVeic = buscaVeic;
	vm.buscaTodosVeic = buscaTodosVeic;
	vm.cadVeic = cadVeic;
	vm.removeVeic = removeVeic;

	function alteraVeic() {

	}

	function buscaVeic() {

	}

	function buscaTodosVeic() {

	}

	function cadVeic() {

	}

	function removeVeic() {
		
	}

};

})();