// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Fish Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Fish = (function (_super) {
        __extends(Fish, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Fish(imageString) {
            _super.call(this, imageString);
            this.sound = "splash";
            this.x = 70;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Fish.prototype.update = function () {
            this.y = stage.mouseY; // position fish under mouse
        };
        return Fish;
    })(objects.GameObject);
    objects.Fish = Fish;
})(objects || (objects = {}));
//# sourceMappingURL=fish.js.map