// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master

module objects { 
    // Button Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Button extends createjs.Bitmap {

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string, x: number, y: number) {
            super(imageString);
            this.regX = this.getBounds().width * 0.5;      //  find center of button  
            this.regY = this.getBounds().height * 0.5;     //  find center of button
            this.x = x;
            this.y = y;

            // creating event listeners for mouseover and mouseout events
            this.on("mouseover", this.OnOver, this);
            this.on("mouseout", this.OnOut, this);
        }   

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public OnOver(event: createjs.MouseEvent): void {
            this.alpha = 0.8; // 80% opacity (20% transparent)
        }

        public OnOut(event: createjs.MouseEvent): void {
            this.alpha = 1.0; // 100% opacity (no transparency)
        }

    }
}