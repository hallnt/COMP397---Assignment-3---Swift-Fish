// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 8, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 2.0 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Water Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Water = (function (_super) {
        __extends(Water, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Water(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Water.prototype.checkBounds = function () {
            /// check if water has left screen
            if (this.x == -1280) {
                this.reset();
            }
        };
        /// check if food has left screen
        // if(this.x < 0 - this.width)
        // this.reset();
        Water.prototype.reset = function () {
            this.x = 0; // reset water off screen
            this.y = 0;
        };
        // this.x = 640;   // start food from right of stage
        // this.y = Math.floor(Math.random() * 480);   // start food at random location on stage
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Water.prototype.update = function () {
            this.x += -this.dx; // moves water across the stage from right to left
            this.checkBounds();
        };
        return Water;
    })(createjs.Bitmap);
    objects.Water = Water;
})(objects || (objects = {}));
//# sourceMappingURL=water.js.map