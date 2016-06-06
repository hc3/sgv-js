'use strict';

angular.module('dashboard')
	.controller('LubrificacaoController', LubrificacaoController);

function LubrificacaoController(VeiculoService,LubrificacaoService) {

	var vm = this;
	vm.titulo = "";
	vm.veiculos = [];
	vm.dados = []
	vm.alteraLub = alteraLub
	vm.buscaLub = buscaLub;
	vm.buscaLubWithPopulate = buscaLubWithPopulate;
	vm.buscaVeiculos = buscaVeiculos;
	vm.buscaTodasLub = buscaTodasLub;
	vm.cadLub = cadLub;
	vm.removeLub = removeLub;

	function buscaVeiculos() {
		VeiculoService.getAll().success(function(data){
			vm.veiculos = data;
		})
		.error(function(data,status) {
			console.log(data);
		});
	}

	function cadLub(lubrificacao) {
		LubrificacaoService.insert(lubrificacao)
			.success(function(data) {
				delete vm.dados;
				buscaTodasLub();
			})
			.error(function(data){
				console.log(data);
			})
	}

	function buscaLubWithPopulate() {
		LubrificacaoService.getAllWithPopulate()
			.success(function(data){
				console.log(data);
			})
			.error(function(data) {
				console.log(data);
			})
	}

	function buscaTodasLub() {
		LubrificacaoService.getAll()
			.success(function(data){
				vm.dados = data;
			})
			.error(function(data){
				console.log(data);
			})
	}

	function removeLub(lubrificacao) {
		LubrificacaoService.remove(lubrificacao)
			.success(function(data){
				console.log("Lubrificação removida com sucesso!"+data);
				buscaTodasLub();
			})
			.error(function(data,status){
				console.log("erro ao remover",data);
				console.log("status",status);
			})
	}	

	function alteraLub() {

	}

	function buscaLub() {

	}



	buscaVeiculos();
	buscaTodasLub();
	buscaLubWithPopulate();
};
