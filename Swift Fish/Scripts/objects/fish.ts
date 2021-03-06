﻿// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master

module objects {
    // Fish Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Fish extends objects.GameObject {
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
          
            this.sound = "splash";
            this.x = 70;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }

        // PUBLIC METHOD ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position fish under mouse
        }
    }
}