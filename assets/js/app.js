angular.module("dashboard",['ngRoute'])
	
	.config(function($routeProvider) {
		$routeProvider
			.when('/veiculoCad',{
				templateUrl:"views/cadVeiculo.html",
				controller:"VeiculoController",
				controllerAs:"VeiculoCtrl"
			})
			.when('/veiculoList',{
				templateUrl:"views/listVeiculo.html",
				controller:"VeiculoController",
				controllerAs:"VeiculoCtrl"
			})
			.when('/lubriCad',{
				templateUrl:"views/cadLubri.html",
				controller:"LubrificacaoController",
				controllerAs:"LubriCtrl"
			})
			.when('/lubriList',{
				templateUrl:"views/listLubri.html",
				controller:"LubrificacaoController",
				controllerAs:"LubriCtrl"
			})
			.when('/graficos',{
				templateUrl:"views/graficos.html",
				controller:"LubrificacaoController",
				controllerAs:"LubriCtrl"				
			});
	})

	.controller("VeiculoController",VeiculoController)
	.controller("LubrificacaoController",LubrificacaoController);

function LubrificacaoController() {
	var vm = this;
	vm.lubrificacoes = [
		{veiculo:"JOÃO",custoKm:"0,55",mediaKm:"5,96",data:"JANEIRO"},
		{veiculo:"ASTROGILDO",custoKm:"0,60",mediaKm:"5,80",data:"JANEIRO"},
		{veiculo:"RUBÊNCIO",custoKm:"0,57",mediaKm:"5,60",data:"JANEIRO"},
		{veiculo:"ALEXSANDRO",custoKm:"0,58",mediaKm:"9,52",data:"JANEIRO"},
		{veiculo:"MONTIVALDO",custoKm:"0,59",mediaKm:"3,54",data:"JANEIRO"},
		{veiculo:"PAULO",custoKm:"0,54",mediaKm:"5,8",data:"JANEIRO"},
	];
	
}

function VeiculoController() {
	var vm = this;
	vm.veiculos = [
		{marca:"FORD",modelo:"CARGO 17.23",placa:"PFI-8891",condutor:"JOÃO"},
		{marca:"FORD",modelo:"CARGO 17.23",placa:"PJM-9811",condutor:"ASTROGILDO"},
		{marca:"FORD",modelo:"CARGO 17.23",placa:"KTO-1022",condutor:"RUBÊNCIO"},
		{marca:"VW",modelo:"8150",placa:"MLC-1022",condutor:"ALEXSANDRO"},
		{marca:"VW",modelo:"8150",placa:"JWI-1920",condutor:"MONTIVALDO"},
		{marca:"VW",modelo:"24.50",placa:"IAG-0087",condutor:"ANDRE"},
		{marca:"MERCEDES",modelo:"5693",placa:"KIP-1022",condutor:"PAULO"}
	]

	vm.add = add;
	function add(veiculo) {
		vm.veiculos.push(angular.copy(veiculo));
		vm.form = {};
		console.log(vm.veiculos);
	}

	vm.limpar = limpar;
	function limpar() {
		vm.form = {};
	}
}