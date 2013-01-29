'use strict';

/* Controllers */

function ExerciseController($scope, $http) {
    $http.get('program/levels/lessons/draw-a.json').success(function(data) {
            $scope.slides = data;
    });
}
//ExerciseController.$inject = [];

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
