'use strict';

function ExerciseController($scope, $http, $route, $routeParams) {
    $http.get('program/levels/lessons/' + $routeParams.exercise + '.json').success(function(data) {
    console.log($routeParams.exercise);
        $scope.slides = data;
        setTimeout(function() {
            Reveal.initialize({
                // default/cube/page/concave/zoom/linear/fade/none
				transition: Reveal.getQueryHash().transition || 'none'
            });
        }, .1 * 1000);
    });
}
//ExerciseController.$inject = [];

