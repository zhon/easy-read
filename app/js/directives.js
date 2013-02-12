'use strict';

angular.module('myApp.directives', [])
    .directive('slide', function() {

        var wrapContent = function (content) {
            return '<img src=' + encodeURI( content ) + ' />';
        };

        var audioContent = function (scope) {
            var content = '';

            if (scope.slide.audio) {
                content += '<audio preload="auto" controls >';
                content += '<source src="';
                content += scope.slide.audio;
                content += '" type="audio/mpeg" />';
                content += '</audio>';
            }
            return content;
        }

        return {
            restrict: 'A'
            ,link: function (scope, element, attrs, controller) {
                var content = ''
                // resorting to imparative jQuery way
                if (scope.slide.images.length == 1) {
                    content += audioContent(scope);
                    content += wrapContent(scope.slide.images[0])
                } else {
                    for (var i=0,len=scope.slide.images.length; i < len; ++i) {
                        content += '<section ';
                        if (i !== len-1) {
                            content += 'data-autoslide="1500" ';
                        }
                        content += '>';
                        if (i == 0) {
                            content += audioContent(scope);
                        }
                        content += wrapContent(scope.slide.images[i]);
                        content += '</section>';
                    }
                }
                element.html(content);
            }
        }
    });
