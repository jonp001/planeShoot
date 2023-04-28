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
        this.enemyImg= document.querySelectorAll(".enemyImage");
        this.enemyImg.innerHTML= []
}

gameLoop() {
    console.log("game is looping");

    if(this.gameOver){
        return;
    }
console.log(this.enemies.length)
    if ( this.enemies.length <= 48){
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }
    // this.update();
    // window.requestAnimationFrame(() => this.gameLoop());
}

update() {
    console.log("Game updating...");
    this.plane.move();
   
    let enemy;
   
        for(let row=0; row < 5; row++) {
            for(let col= 0; col < 11; col++) {
                 enemy= new Enemy({
                    // x: col * 50 + 50,
                    // y: row * 50 + 50,
                    // t: 20,
                    // l: 20,
                    
                   
                })
            this.enemies.push(enemy)
           
         
            if(this.enemies.length === 48){

            this.enemies.forEach( enemy => {
                const node= document.createElement(enemy);
                
                this.gameArea.appendChild(node);
            })
                // this.enemies= [];
         
                // this.gameArea.append(...this.enemies)
                
            }
            
        }
        // enemy.move();
      
        // enemy.enemyMove();
    }
    
}
}

