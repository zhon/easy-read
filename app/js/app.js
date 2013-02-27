'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives'],
        function($routeProvider, $locationProvider) {

        $routeProvider.when('/level/:level/lesson/:lesson/:exercise', {
            templateUrl: 'partials/exercise.html',
            controller: ExerciseController
        });

        //$routeProvider.otherwise({redirectTo: '/lesson1'});
        //

        //$locationProvider.html5Mode(true);
});



(function ( document, window ) {
    'use strict';
    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("slidechanged", function(e) {
        var audio = e.currentSlide.getElementsByTagName("audio")[0];
        if (audio) {
            if (audio.readyState == 0) {
                audio.load();
            }
            audio.play();
        }
    }, false)
})(document, window);
