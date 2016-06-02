(function() {
	'use strict';

	angular.module('dashboard')
		.controller('LubrificacaoController', LubrificacaoController);

function LubrificacaoController() {

	var vm = this;
	vm.titulo = "";

	vm.alteraLub = alteraLub
	vm.buscaLub = buscaLub;
	vm.buscaTodasLub = buscaTodasLub;
	vm.cadLub = cadLub;
	vm.removeLub = removeLub;

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

};

})();