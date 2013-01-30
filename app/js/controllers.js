'use strict';

/* Controllers */

function ExerciseController($scope, $http) {
    $http.get('program/levels/lessons/draw-a.json').success(function(data) {
        $scope.slides = data;
        setTimeout(function() {
            Reveal.initialize({
                // default/cube/page/concave/zoom/linear/fade/none
				transition: Reveal.getQueryHash().transition || 'none', 
            });
        }, .1 * 1000);
    });
}
//ExerciseController.$inject = [];


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
