"use strict";

var app = angular.module("test", []);

app.controller("testController", function ($scope) {
  $scope.name = "Jan";
  $scope.surname = "Kowalski";
});