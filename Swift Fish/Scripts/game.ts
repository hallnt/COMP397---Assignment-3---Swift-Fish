// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 10, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Version 3.0 


/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/water.ts" />
/// <reference path="objects/fish.ts" />
/// <reference path="objects/food.ts" />
/// <reference path="objects/monster.ts" />

/// <reference path="objects/scoreboard.ts" />

/// <reference path="managers/collision.ts" />
 
// GAME FRAMEWORK VARIABLES
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "water", src: "assets/images/water.jpg" },
    { id: "fish", src: "assets/images/fish.png" },
    { id: "food", src: "assets/images/Seaweed.png" },
    { id: "monster", src: "assets/images/fire_monster.png" },
    { id: "bite", src: "assets/audio/bite.wav" },
    { id: "blast", src: "assets/audio/blast.wav" },
    { id: "splash", src: "assets/audio/fish splash.wav" }
];

// GAME VARIABLES
var water: objects.Water;
var fish: objects.Fish;
var food: objects.Food;
var monsters: objects.Monster[] = [];

var scoreboard: objects.ScoreBoard;

// GAME MANAGERS
var collision: managers.Collision;

// PRELOADER FUNCTION
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// CALLBACK FUNCTION THAT INITIALIZES GAME OBJECTS
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// FUNCTION TO SETUP STAT COUNTING
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '1000px';
    stats.domElement.style.top = '50px';

    document.body.appendChild(stats.domElement);
}

// CALLBACK FUNCTION THAT CREATES OUR MAIN GAME LOOP - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    water.update();
    fish.update();
    food.update();
    
    for (var monster = 0; monster < 3; monster++) {
        monsters[monster].update();
        collision.check(monsters[monster]); // check if collision occurs between the fish and monster
    }
    collision.check(food);  // check if collision occurs between the fish and food

    scoreboard.update();    // update score and lives

    stage.update();

    stats.end(); // end measuring
}

// OUR MAIN GAME FUNCTION
function main() {

    // add water object to the stage
    water = new objects.Water(assets.getResult("water"));
    stage.addChild(water);

    // add food object to the stage
    food = new objects.Food(assets.getResult("food"));
    stage.addChild(food);

    // add fish object to the stage
    fish = new objects.Fish(assets.getResult("fish"));
    stage.addChild(fish);

    // add monster object to the stage
    for (var monster = 0; monster < 3; monster++) {
        monsters[monster] = new objects.Monster(assets.getResult("monster"));
        stage.addChild(monsters[monster]);
    }

    // add scvoreboard
    scoreboard = new objects.ScoreBoard();

    // add collision manager
    collision = new managers.Collision;
    
}