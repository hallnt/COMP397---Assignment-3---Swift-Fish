// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 10, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 3.0 

module objects { 
    // Scoreboard Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class ScoreBoard {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public score: number = 0;
        public lives: number = 5;

        public scoreLabel: createjs.Text;
        public livesLabel: createjs.Text;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "35px Consolas", "#00FF21");
            this.scoreLabel = new createjs.Text("Score:", "35px Consolas", "#00FF21");
            this.scoreLabel.x = 350; // position of score label on the screen
            stage.addChild(this.livesLabel); // add lives label to the stage
            stage.addChild(this.scoreLabel); // add score label to the sctage
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
}

