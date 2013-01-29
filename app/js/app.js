'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/lesson1', {templateUrl: 'partials/lesson1.html', controller: MyCtrl1});
    $routeProvider.otherwise({redirectTo: '/lesson1'});
  }]);
