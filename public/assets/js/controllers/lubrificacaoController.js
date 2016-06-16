'use strict';

angular.module('dashboard')
	.controller('LubrificacaoController', LubrificacaoController);

function LubrificacaoController(VeiculoService,LubrificacaoService) {

	var vm = this;
	vm.titulo = "";
	vm.veiculos = [];
	vm.veiculo = {};
	vm.dados = []
	vm.reset = reset;
	vm.alteraLub = alteraLub
	vm.buscaLub = buscaLub;
	vm.buscaLubWithPopulate = buscaLubWithPopulate;
	vm.buscaVeiculos = buscaVeiculos;
	vm.buscaVeiculo = buscaVeiculo;
	vm.buscaTodasLub = buscaTodasLub;
	vm.cadLub = cadLub;
	vm.removeLub = removeLub;

	function reset(form) {
		if(form) {
			form.$setPristine();
			form.$setUntouched();
			delete vm.lubri;
		}
	}

	function buscaVeiculo(id) {
		VeiculoService.getOne(id).success(function(data){
			vm.veiculo = data;
		})
		.error(function(data) {
			console.log(data);
		})
	}

	function buscaVeiculos() {
		VeiculoService.getAll().success(function(data){
			vm.veiculos = data;
		})
		.error(function(data,status) {
			console.log(data);
		});
	}

	function cadLub(lubrificacao,form) {
		LubrificacaoService.insert(lubrificacao)
			.success(function(data) {
				delete vm.lubri;
				reset(form);
				buscaTodasLub();
			})
			.error(function(data){
				console.log(data);
			})
	}

	//NOVA BUSCA COM O POPULATE
	function buscaLubWithPopulate() {
		LubrificacaoService.getAllWithPopulate()
			.success(function(data){
				vm.dados = data;
			})
			.error(function(data) {
				console.log(data);
			})
	}

	//ANTIGA BUSCA SEM O POPULATE
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
				buscaLubWithPopulate()
			})
			.error(function(data,status){
				console.log("erro ao remover",data);
				console.log("status",status);
			})
	}

	function alteraLub() {

	}

	buscaVeiculos();
	buscaLubWithPopulate();
};
