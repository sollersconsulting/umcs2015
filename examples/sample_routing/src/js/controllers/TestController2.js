"use strict";

sampleApp.controller("TestController2", ["$scope", "$routeParams", function ($scope, $routeParams) {
  $scope.value = $routeParams.productId;
  console.log($scope.value);
}]);