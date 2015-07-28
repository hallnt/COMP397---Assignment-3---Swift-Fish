// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master
var objects;
(function (objects) {
    // Scoreboard Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard() {
            // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.Text("Lives:", "35px Consolas", "#00FF21");
            this.scoreLabel = new createjs.Text("Score:", "35px Consolas", "#00FF21");
            this.scoreLabel.x = 350; // position of score label on the screen
            stage.addChild(this.livesLabel); // add lives label to the stage
            stage.addChild(this.scoreLabel); // add score label to the sctage
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map