
'use strict';

var Model = function (canvas) {
    
    var ModelDomainWidth = 400;
    this.originX = canvas.width / 2 - ModelDomainWidth / 2;
    this.originY = 0;
    this.ModelDomainWidth = ModelDomainWidth;
    this.canvas = canvas;
    this.wayPoint = new Vector(canvas.width / 2, this.originY + 200);

};


Model.prototype = {
    
    update: function () {

        this.canvas.clear();
        
        this.drawWayPoint();
        
    },


    drawWayPoint: function () {
        var alpha = 1, color = 'rgba(0,153,255,' + alpha + ')';
        this.canvas.circle(this.wayPoint.x, this.wayPoint.y, 5, color);
    }

};

