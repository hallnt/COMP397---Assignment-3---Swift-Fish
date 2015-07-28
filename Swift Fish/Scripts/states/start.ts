// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master

module states { 
    // Start Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Start {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            this.main();
        }

        // PRIVATE METHOD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        //call-back method that responds to play button clicked event
        private startButtonClicked(event: createjs.MouseEvent) {
            // remove sound and objects from the stage
            createjs.Sound.removeSound("soundtrack");
            stage.removeAllChildren(); 
            stage.removeAllEventListeners();    
            changeGameState(state_constants.GAME_STATE);
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        public update(): void { 
            // update stage
            stage.update();
        }

        public main(): void {            
            // add instructions image to the stage
            instructions = new createjs.Bitmap(assets.getResult("instructions"));
            instructions.x = 70;
            stage.addChild(instructions);

            // add fish object to the stage
            fish2 = new createjs.Bitmap(assets.getResult("fish"));
            fish2.x = 450;
            fish2.y = 240;
            stage.addChild(fish2);

            // add start button to the stage
            startButton = new objects.Button(assets.getResult("startButton"), 320, 345);
            stage.addChild(startButton);
            startButton.on("click", this.startButtonClicked);  // add mouse click event to betmax button

            // play sound clip
            createjs.Sound.play("soundtrack");
        }
    }
}
