'use strict';

function ExerciseController($scope, $http, $route, $routeParams) {
    $http.get('program/levels/lessons/' + $routeParams.exercise + '.json').success(function(data) {
        $scope.slides = data;
    });
}
//ExerciseController.$inject = [];

