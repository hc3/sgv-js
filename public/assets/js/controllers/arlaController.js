'use strict';

angular.module('dashboard')
  .controller('arlaController',arlaController);

  function arlaController(VeiculoService,ArlaService) {

    var vm = this;
    vm.dados = [];
    vm.veiculos = [];
    vm.reset = reset;
    vm.cadArla = cadArla;
    vm.buscaAll = buscaAll;

    function reset(form){
      if(form) {
        form.$setPristine();
        form.$setUntouched();
        delete vm.arla;
      }
    };

    function cadArla(arla,form) {
      ArlaService.insert(arla)
        .success(function(data){
          reset(form);
          buscaAll()
        })
        .error(function(data){
          console.log(data);
        })
    };

    function buscaArla() {
      ArlaService.getAll().success(function(data){
        vm.dados = data;
      })
      .error(function(data,status){
        console.log(data);
      })
    };

    function buscaVeiculos() {
      VeiculoService.getAll().success(function(data){
        vm.veiculos = data;
      })
      .error(function(data,status){
        console.log(data);
      })
    }

    buscaVeiculos();
    buscaArla();

}
