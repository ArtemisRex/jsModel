
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
        debug = false,
        mouseDown = false;
//    if (debug) {
    model.update();
//    } else {
//        setInterval(model.update.bind(model), 24);
//    }

/*
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


var Model = function (canvas) {
    
    var ModelDomainWidth = 400;
    this.originX = canvas.width / 2 - waterfallWidth / 2;
    this.originY = 0;
    this.ModelDomainWidth = ModelDomainWidth;
    this.canvas = canvas;
    this.wayPoint = new Vector(canvas.width / 2, this.originY + 200);

};


Model.prototype = {
    
    update: function () {

        //this.canvas.clear();
        
        this.drawWayPoint();
        
    },


    drawWayPoint: function () {
        var alpha = 1, color = 'rgba(0,153,255,' + alpha + ')';
        this.canvas.circle(this.wayPoint.x, this.wayPoint.y, 5, color);
    }

};

