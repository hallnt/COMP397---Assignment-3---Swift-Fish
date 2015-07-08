// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 8, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 2.0 

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

        /// check if food has left screen
       // if(this.x < 0 - this.width)
       // this.reset();


        private reset(): void {
            this.x = 0;   // reset water off screen
            this.y = 0;   
        }

       // this.x = 640;   // start food from right of stage
   // this.y = Math.floor(Math.random() * 480);   // start food at random location on stage

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += -this.dx;  // moves water across the stage from right to left
            this.checkBounds();
        }
    }
}  