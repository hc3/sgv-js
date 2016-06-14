'use strict';

angular.module('dashboard')
  .controller('arlaController',arlaController);

  function arlaController(VeiculoService,ArlaService) {

    var vm = this;
    vm.dados = [];
    vm.veiculos = [];
    vm.reset = reset;
    vm.cadArla = cadArla;
    vm.buscaArla = buscaArla;

    function reset(form){
      if(form) {
        form.$setPristine();
        form.$setUntouched();
        delete vm.arla;
      }
    };

    function cadArla(arla,form) {
      arla.km_rodado = arla.km_atual - arla.km_anterior;
      arla.media_consumo = arla.qnt_litros / arla.km_rodado;
      console.log(arla);
      ArlaService.insert(arla)
        .success(function(data){
          reset(form);
          buscaArla()
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
