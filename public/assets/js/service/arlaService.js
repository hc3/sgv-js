'use strict';

angular.module('dashboard')
  .service('ArlaService',ArlaService);

  function ArlaService($http) {

    this.insert = function(arla) {
      const url = "/api/arla";
      return $http.post(url,arla);
    }

    this.getAll = function() {
      const url = "/api/arla";
      return $http.get(url);
    }

    this.getAllWithPopulate = function() {
      const url = "/api/arlaPopulate";
      return $http.get(url);
    }
  }
