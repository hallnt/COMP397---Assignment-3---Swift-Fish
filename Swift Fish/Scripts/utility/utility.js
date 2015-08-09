// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master
var utility;
(function (utility) {
    // DISTANCE UTILITY FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    function distance(p1, p2) {
        return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
    }
    utility.distance = distance;
})(utility || (utility = {}));
//# sourceMappingURL=utility.js.map