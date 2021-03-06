﻿// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master 

module states { 
    // GameOver Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class GameOver {
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public gameoverLabel: createjs.Text;
        public yourScoreLabel: createjs.Text;
        
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.main();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        //call-back method that responds to playAgain button clicked event
        private playAgainButtonClicked(event: createjs.MouseEvent) {
            // remove objects from the stage
            stage.removeAllChildren();
            stage.removeAllEventListeners();
            changeGameState(state_constants.GAME_STATE);
        }   
        
        //call-back method that responds to quitGame button clicked event
        private quitGameButtonClicked(event: createjs.MouseEvent) {
            if (confirm("Quit Game?")) {
                window.close();  // close window    
            }
        }              
       

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        public update(): void {             
            water.update(); // update scrolling background
            stage.update(); // update stage
        }

        public main(): void {    
            // add water object to the stage
            water = new objects.Water(assets.getResult("water"));
            stage.addChild(water);
            
            // add gameover label to the stage
            this.gameoverLabel = new createjs.Text("GAME OVER!", "50px Consolas", "#ee5b11");
            this.gameoverLabel.x = 190;
            this.gameoverLabel.y = 100;
            stage.addChild(this.gameoverLabel);

            // add your score label to the stage
            this.yourScoreLabel = new createjs.Text("Your Score: " + scoreboard.score, "35px Consolas", "#00FF21");
            this.yourScoreLabel.x = 175;
            this.yourScoreLabel.y = 200;            
            stage.addChild(this.yourScoreLabel);     
            
            // add play again button to the stage
            playAgainButton = new objects.Button(assets.getResult("playAgainButton"), 215, 360);
            stage.addChild(playAgainButton);
            playAgainButton.on("click", this.playAgainButtonClicked);  // add mouse click event to betmax button

            // add quit game button to the stage
            quitGameButton = new objects.Button(assets.getResult("quitGameButton"), 410, 360);
            stage.addChild(quitGameButton);
            quitGameButton.on("click", this.quitGameButtonClicked);  // add mouse click event to betmax button
            
            // play sound clip
            createjs.Sound.play("gameover");
        }
    }
}
 