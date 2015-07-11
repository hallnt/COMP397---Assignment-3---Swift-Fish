// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 10, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 3.0 

module utility {
    // DISTANCE UTILITY FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export function distance(p1: createjs.Point, p2: createjs.Point): number {
        return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
    }
}