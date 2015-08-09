// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master

module objects {
    // Food Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Food extends objects.GameObject {
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "food";
            this.sound = "bite";
            this.dx = 5;

            this.reset();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if food has left screen
            if (this.x < 0 - this.width)
                this.reset();
        }

        private reset(): void {
            this.x = 640;   // start food from right of stage
            this.y = Math.floor(Math.random() * 480);   // start food at random location on stage
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += -this.dx;  // moves food across the stage from right to left
            this.checkBounds();
        }
    }
} 