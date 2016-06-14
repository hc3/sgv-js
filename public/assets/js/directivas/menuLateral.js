'use strict';

angular.module('dashboard')
  .directive('menuLateral',menuLateral);

function menuLateral() {
  return {
    restrict:'E',
    templateUrl:'../views/menuLateral.html',
  }
}
