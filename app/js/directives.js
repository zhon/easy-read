'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('slides', function() {
        return {
            restrict: 'A',
            template: 
                ' <section ng-repeat="slide in slides">' +
                '    <section data-autoslide=1000 ng-repeat="image in slide.images">' +
                '        <img ng-src="{{image}}" />' +
                '    </section>' +
                '</section>'
        }
     });
