'use strict';

angular.module('dashboard')
	.controller('VeiculoController', VeiculoController);

function VeiculoController(VeiculoService) {

	var vm = this;

	vm.titulo = "";
	vm.veiculos = [];
	vm.cadVeic = cadVeic;
	vm.removeVeic = removeVeic;
	vm.reset = reset;
	vm.alteraVeic = alteraVeic;
	vm.regexPlaca = /[a-z]{3}-?\d{4}/;

	function loadVeiculos() {
		VeiculoService.getAll().success(function(data){
			vm.veiculos = data;
		})
		.error(function(data,status) {
			console.log(data);
		});
	}

	function cadVeic(veiculo,form) {

		VeiculoService.insert(veiculo).success(function(data){
			delete vm.veiculo;
			reset(form);
			loadVeiculos();
		})
		.error(function(data){
			console.log(data);
		});

	}

	function removeVeic(veiculo) {
		VeiculoService.remove(veiculo).success(function(data){
			console.log("veiculo removido com sucesso!"+data);
			loadVeiculos();
		})
		.error(function(data,status){
			console.log("erro ao remover", data);
			console.log("status: ",status);
		});
	}

	function reset(form) {
		if(form) {
			form.$setPristine();
			form.$setUntouched();
			delete vm.veiculo;
		}
	}

	function alteraVeic(veiculo) {

	}



	loadVeiculos();
};