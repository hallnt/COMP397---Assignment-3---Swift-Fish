// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 27, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 4.0 
var managers;
(function (managers) {
    // Assets Class +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Assets = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Assets() {
            // PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //public assets = new createjs.LoadQueue();
            // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            this.manifest = [
                { id: "water", src: "assets/images/water.jpg" },
                { id: "fish", src: "assets/images/fish.png" },
                { id: "food", src: "assets/images/Seaweed.png" },
                { id: "monster", src: "assets/images/fire_monster.png" },
                { id: "bite", src: "assets/audio/bite.wav" },
                { id: "blast", src: "assets/audio/blast.wav" },
                { id: "splash", src: "assets/audio/fish splash.wav" }
            ];
            this.preload();
        }
        Assets.prototype.preload = function () {
            assets = new createjs.LoadQueue();
            assets.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            assets.on("complete", init, this);
            assets.loadManifest(manifest);
            //Setup statistics object
            setupStats();
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map