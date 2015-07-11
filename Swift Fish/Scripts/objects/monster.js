// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 10, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 3.0 
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Monster Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Monster = (function (_super) {
        __extends(Monster, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Monster(imageString) {
            _super.call(this, imageString);
            this.name = "monster";
            this.sound = "blast";
            this.reset();
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Monster.prototype.checkBounds = function () {
            /// check if monster has left screen
            if (this.x < 0 - this.width)
                this.reset();
        };
        Monster.prototype.reset = function () {
            this.x = 640; // start monster from right of stage
            this.y = Math.floor(Math.random() * 480); // start monster at random location on stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Monster.prototype.update = function () {
            this.x += -this.dx; // move monsters across the stage from right to left
            this.y += this.dy; // drift monsters up and down
            this.checkBounds();
        };
        return Monster;
    })(objects.GameObject);
    objects.Monster = Monster;
})(objects || (objects = {}));
//# sourceMappingURL=monster.js.map