"use strict";

var sampleApp = angular.module("RouteSample", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider.
          when('/route1', {
            templateUrl: 'html/first.html',
            controller: 'TestController1'
          }).
          when('/route2/:productId', {
            templateUrl: 'html/second.html',
            controller: 'TestController2'
          }).
          otherwise({
            redirectTo: '/route1'
          });
    });

