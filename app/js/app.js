'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [], function($routeProvider, $locationProvider) {

        $routeProvider.when('/level/:level/lesson/:lesson/:exercise', {
            templateUrl: 'partials/exercise.html',
            controller: ExerciseController
        });

        //$routeProvider.otherwise({redirectTo: '/lesson1'});
        //

        //$locationProvider.html5Mode(true);
});
