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
        // this.enemy= new Enemy( //(gameArea: any, height: any, width: any, top: any, left: any, enemyImg: any): Enemy
        //     this.gameArea,
        //     100,
        //     150,
        //     300,
        //     650,
        //     "../../images/enemy.png",
        // );
        this.enemies=[];                   
        this.score=0;
        this.lives= 4;
        this.gameOver= false;

        this.width= 600;
        this.gameArea.style.width= `${this.width}px`;
        
        this.height=500;
        this.gameArea.style.height= `${this.height}px`;
        this.x=0;
        this.y=0;
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

        for(let row=0; row < 5; row++) {
            for(let col= 0; col < 11; col++) {
                const enemy= new Enemy({
                    x: col * 60 + 50,
                    y: row * 60 + 50,
                })
            this.enemies.push(enemy)
        }
    }

    enemy.move();
}

}