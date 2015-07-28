// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master 
var states;
(function (states) {
    // GamePlay Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var GamePlay = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GamePlay() {
            this.main();
        }
        // PUBLIC METHODs ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        GamePlay.prototype.update = function () {
            // update game vriables
            water.update();
            fish.update();
            food.update();
            for (var monster = 0; monster < 3; monster++) {
                monsters[monster].update();
                collision.check(monsters[monster]); // check if collision occurs between the fish and monster
            }
            collision.check(food); // check if collision occurs between the fish and food
            scoreboard.update(); // update score and lives
            stage.update();
        };
        GamePlay.prototype.main = function () {
            // add water object to the stage
            water = new objects.Water(assets.getResult("water"));
            stage.addChild(water);
            // add food object to the stage
            food = new objects.Food(assets.getResult("food"));
            stage.addChild(food);
            // add fish object to the stage
            fish = new objects.Fish(assets.getResult("fish"));
            stage.addChild(fish);
            // add monster object to the stage
            for (var monster = 0; monster < 3; monster++) {
                monsters[monster] = new objects.Monster(assets.getResult("monster"));
                stage.addChild(monsters[monster]);
            }
            // add scoreboard
            scoreboard = new objects.ScoreBoard();
            // add collision manager
            collision = new managers.Collision;
        };
        return GamePlay;
    })();
    states.GamePlay = GamePlay;
})(states || (states = {}));
//# sourceMappingURL=game_play.js.map