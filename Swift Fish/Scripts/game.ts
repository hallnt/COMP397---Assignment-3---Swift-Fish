// Source File: COMP397 Assignment 3 - 2D Side Scrolling Web Game
// Author: Teleisha Hall
// ID: 300820822 
// Last Modified By: Teleisha Hall 
// Date Last Modified - July 28, 2015
// Program Description: A 2D side scrolling arcade web game using the Createjs framework 
// Revision History: v4 - https://github.com/hallnt/COMP397---Assignment-3---Swift-Fish/commits/master
/*------------------------------------------------------------------------------------------------------------------------------------------*/

/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />
/// <reference path="utility/state_constants.ts" />

/// <reference path="objects/button.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/water.ts" />
/// <reference path="objects/fish.ts" />
/// <reference path="objects/food.ts" />
/// <reference path="objects/monster.ts" />

/// <reference path="objects/scoreboard.ts" />

/// <reference path="managers/collision.ts" />
 
/// <reference path="states/start.ts" />
/// <reference path="states/game_play.ts" />
/// <reference path="states/gameover.ts" />
/*------------------------------------------------------------------------------------------------------------------------------------------*/

// GAME FRAMEWORK VARIABLES
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;

// GAME ASSETS
var assets: createjs.LoadQueue;
var manifest = [
    { id: "instructions", src: "assets/images/Instructions.png" },
    { id: "startButton", src: "assets/images/start_game_button.jpg" },
    { id: "playAgainButton", src: "assets/images/playAgainButton.png" },
    { id: "quitGameButton", src: "assets/images/quitGameButton.png" },
    { id: "water", src: "assets/images/water.jpg" },
    { id: "fish", src: "assets/images/fish.png" },
    { id: "fish2", src: "assets/images/fish.png" },
    { id: "food", src: "assets/images/Seaweed.png" },
    { id: "monster", src: "assets/images/fire_monster.png" },
    { id: "soundtrack", src: "assets/audio/game_soundtrack.mp3" },
    { id: "bite", src: "assets/audio/bite.wav" },
    { id: "blast", src: "assets/audio/blast.wav" },
    { id: "splash", src: "assets/audio/splash.mp3" },
    { id: "gameover", src: "assets/audio/Game Over.mp3" }
]; 

// GAME VARIABLES
var water: objects.Water;
var fish: objects.Fish;
var food: objects.Food;
var monsters: objects.Monster[] = [];

var scoreboard: objects.ScoreBoard;

// GAME BUTTONS
var startButton: objects.Button;
var playAgainButton: objects.Button;
var quitGameButton: objects.Button;

// GAME MANAGERS
var collision: managers.Collision;

// GAME STATES
var start: states.Start;
var playGame: states.GamePlay;
var gameOver: states.GameOver;
var presentState;

// START SCREEN VARIABLES
var instructions: createjs.Bitmap;
var fish2: createjs.Bitmap;
/*------------------------------------------------------------------------------------------------------------------------------------------*/


// PRELOADER FUNCTION
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    //event listener triggers when assets are completely loaded
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
    stats.domElement.style.left = '1006px';
    stats.domElement.style.top = '150px';

    document.body.appendChild(stats.domElement);
}

// CALLBACK FUNCTION THAT CREATES OUR MAIN GAME LOOP - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    presentState.update(); //update present game state

    stats.end(); // end measuring
}

// OUR MAIN GAME FUNCTION
function main() {    
    start = new states.Start(); // instantiate the start state
    presentState = start;   // make present state the start state
}

// FUNCTION TO CHANGE GAME STATE
function changeGameState(state: number): void {
    // switch between game states
    switch (state) {
        case state_constants.START_STATE:
            presentState = start;   // make present state the start state
            break;

        case state_constants.GAME_STATE:
            playGame = new states.GamePlay();   // instantiate gamePlay state            
            presentState = playGame;        // make present state the game play state
            break;

        case state_constants.GAMEOVER_STATE:
            gameOver = new states.GameOver();   // instantiate the gameOver state            
            presentState = gameOver;        // make present state the gameOver state
            break;
    }
}