// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master
var managers;
(function (managers) {
    // Collision Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Collision = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Collision() {
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Check the distance between game and any other object +++++++++++++++++++++++++
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = fish.x;
            p1.y = fish.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((fish.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "monster") {
                        scoreboard.lives--;
                        // game over
                        if (scoreboard.lives < 0) {
                            // change to gameOver state
                            changeGameState(state_constants.GAMEOVER_STATE);
                        }
                    }
                    if (gameObject.name == "food") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map