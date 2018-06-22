
'use strict';
   
// shorthand version is  $( function() {
$ ( document ).ready(function() {
    var canvas = new Canvas($('canvas')[0]),
        debug = false,
        mouseDown = false;

    $("#canvas").click(function (e) {
        var x = Math.floor((e.pageX - $("#canvas").offset().left)),
            y = Math.floor((e.pageY - $("#canvas").offset().top));
    //    waterfall.wayPoint = new Vector(x, y);
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
      //  waterfall.wayPoint = new Vector(x, y);
    });

});

