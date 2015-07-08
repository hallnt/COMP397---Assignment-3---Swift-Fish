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
    // Fish Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Fish = (function (_super) {
        __extends(Fish, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Fish(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 70;
        }
        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Fish.prototype.update = function () {
            this.y = stage.mouseY; // position fish under mouse
        };
        return Fish;
    })(createjs.Bitmap);
    objects.Fish = Fish;
})(objects || (objects = {}));
//# sourceMappingURL=fish.js.map