'use strict';

angular.module('myApp.directives', [])
    .directive('slide', function() {

        var wrapContent = function (content) {
            return '<img src=' + encodeURI( content ) + ' />';
        };

        return {
            restrict: 'A'
            ,link: function (scope, element, attrs, controller) {
                var content = '';

                if (scope.slide.audio) {
                    content += '<audio preload="auto" controls >';
                    content += '<source src="';
                    content += scope.slide.audio;
                    content += '" type="audio/mpeg" />';
                    content += '</audio>';
                }
                // resorting to imparative jQuery way
                if (scope.slide.images.length == 1) {
                    content += wrapContent(scope.slide.images[0])
                } else {
                    for (var i=0,len=scope.slide.images.length; i < len; ++i) {
                        content +=
                            '<section ' +
                            function () {
                                var result = '';
                                if (i !== len-1) {
                                    result = 'data-autoslide="1000" ';
                                }
                                return result;
                            }() +
                            '>' +
                            wrapContent(scope.slide.images[i]) +
                            '</section>';
                    }
                }
                element.html(content);
            }
        }
    });
