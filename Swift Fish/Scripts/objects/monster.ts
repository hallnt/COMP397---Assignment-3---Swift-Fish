// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master 

module objects {
    // Monster Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Monster extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "monster";
            this.sound = "blast";
            this.reset();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            /// check if monster has left screen
            if (this.x < 0 - this.width)
                this.reset();
        }

        private reset(): void {
            this.x = 640;   // start monster from right of stage
            this.y = Math.floor(Math.random() * 480);   // start monster at random location on stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += -this.dx;  // move monsters across the stage from right to left
            this.y += this.dy;  // drift monsters up and down
            this.checkBounds();
        }
    }
}  