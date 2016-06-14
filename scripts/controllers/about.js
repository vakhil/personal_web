'use strict';

/**
 * @ngdoc function
 * @name osboxesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the osboxesApp
 */
angular.module('osboxesApp')
  .controller('AboutCtrl', function ($scope, $http) {
 $http.get('./JSON/todos.json')
       .then(function(res){
          $scope.todos = res.data;                          
        });

$http.get('./JSON/status.json')
       .then(function(res){
          $scope.status = res.data;                          
        });

$http.get('./JSON/jobs.json')
       .then(function(res){
          $scope.jobs = res.data;                          
        });

 
});


