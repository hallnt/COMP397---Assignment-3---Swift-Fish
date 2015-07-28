// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master

module objects {
    // Water Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Water extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            /// check if water has left screen
            if (this.x == -1280 ) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = 0;   // start water at x=0
            this.y = 0;   // start water at y=0
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x -= this.dx;  // moves water across the stage from right to left
            this.checkBounds();
        }
    }
}  