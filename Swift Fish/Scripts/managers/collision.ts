// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 10, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 3.0 

module managers {
    // Collision Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Collision {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Check the distance between game and any other object +++++++++++++++++++++++++
        public check (gameObject: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point;
        var p2: createjs.Point = new createjs.Point;

        p1.x = fish.x;
        p1.y = fish.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;

        if (utility.distance(p1, p2) < ((fish.height * 0.5) + (gameObject.height * 0.5))) {
            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                if (gameObject.name == "monster") {
                    scoreboard.lives--;
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
    } 
    }
}