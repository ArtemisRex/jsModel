
'use strict';
   
// shorthand version is  $( function() {
// This tells JS not to execute until the html page is loaded
$ ( document ).ready(function() {
/*
    var canvas = new Canvas($('canvas')[0]);
    var alpha = 1, color = 'rgba(0,153,255,' + alpha + ')';
    var x = 100, y = 100;
    canvas.circle(x, y, 5, color);
*/

    var canvas = new Canvas($('canvas')[0]),
        model = new Model(canvas),
        modelTimeStepMilliSec = 24,
        debug = true,
        mouseDown = false;

    if (debug) {
        model.update();
    } else {
        setInterval(model.update.bind(model), modelTimStepMilliSec);
    }


    $("#canvas").click(function (e) {
        var x = Math.floor((e.pageX - $("#canvas").offset().left)),
            y = Math.floor((e.pageY - $("#canvas").offset().top));
        model.wayPoint = new Vector(x, y);
    });
   
    $("#canvas").mousedown(function () {
        mouseDown = true;
    });

    $(document).mouseup(function () {
        mouseDown = false;
    });

    $("#canvas").mousemove(function (e) {
        if (mouseDown === false) {
            return;
        }
        var x = Math.floor((e.pageX - $("#canvas").offset().left)),
            y = Math.floor((e.pageY - $("#canvas").offset().top));
        model.wayPoint = new Vector(x, y);
    });
*/
});

