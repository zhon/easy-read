
(function ( document, window ) {
    'use strict';

    var body = document.getElementsByTagName("body")[0];
    body.addEventListener("impress:stepenter", function(e) {
        var audio = e.target.getElementsByTagName("audio")[0];
        if (audio) {
            audio.play();
        }
    }, false)


})(document, window);
