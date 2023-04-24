import {Plane} from "./plane.js";
import { Enemy } from "./enemy.js";


export class Game {
    constructor() {
        this.gameArea=document.getElementById("game-area");
        this.gameScore=document.getElementById("score");
        this.gameLives=document.getElementById("lives");
        this.gameFinished=document.getElementById("game-finished");
        this.score=0;
        this.lives=4;
        this.gameOver= false;
        this.plane= new Plane(
        this.gameArea,
        300,
        300,
        650,
        100,
        150,
        "../../images/plane.png",
        );
        this.enemy= new Enemy( //(gameArea: any, height: any, width: any, top: any, left: any, enemyImg: any): Enemy
            this.gameArea,
            100,
            150,
            300,
            650,
            "../../images/enemy.png",
        );
         
        this.score=0;
        this.lives= 4;
        this.gameOver= false;

        this.width= 600;
        this.gameArea.style.width= `${this.width}px`;
        
        this.height=500;
        this.gameArea.style.height= `${this.height}px`;
}

gameLoop() {
    console.log("game is looping");

    if(this.gameOver){
        return;
    }

    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
}

update() {
    console.log("Game updating...");
    this.plane.move();
    // this.enemy.move();
}
}

