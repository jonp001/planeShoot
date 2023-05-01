
import { Plane } from "./plane.js";
import { Enemy } from "./enemy.js";
import { Missle } from "./missle.js";

export class Game {
    constructor() {
      this.gameArea = document.getElementById("game-area");
      this.gameScore = document.getElementById("score");
      this.gameLives = document.getElementById("lives");
      this.body= document.querySelector("body");
      this.gameFinished = document.getElementById("game-finished");
      this.score = 0;
      this.lives = 4;
      this.gameOver = false;
      this.plane = new Plane(
        this.gameArea,
        300,
        300,
        650,
        100,
        150,
        "../../images/plane.png"
      );
        
      this.enemies = [];
      this.missles= [];
      this.width = 600;
      this.gameArea.style.width = `${this.width}px`;
      this.height = 500;
      this.gameArea.style.height = `${this.height}px`;
      this.x = 0;
      this.y = 0;
      this.numRows
      // create all the enemy elements
      for ( let i= 0; i< 4; i++ ) {
        for( let j=0; j < 7; j++ ) {
          const enemy= new Enemy( i, j);
          this.gameArea.appendChild(enemy.getElement(".enemy"));
          this.enemies.push(enemy);
          console.log(this.enemies, "was inserted")
          
        }
      }
      this.direction = 1;
      this.animateEnemies= this.animateEnemies.bind(this);
     
    }

    animateEnemies() {
      for ( let i= 0; i< this.enemies.length; i++){
        const enemy= this.enemies[i];
        if( enemy.col === 7 && this.direction === 1){
          this.direction = -1;
          enemy.row += 1;
        } else if( enemy.col ===0 && this.direction === -1){
          this.direction= 1;
          enemy.row += 1;
        }
        if( this.direction === 1) {
          enemy.moveRight();
        } else  { 
          enemy.moveLeft();
        }
        enemy.element.style.top =enemy.row * 60 + "px";
        
       
      }
      // window.requestAnimationFrame(this.animateEnemies) 
    }
  // startGame() {
  //   setInterval(this.animateEnemies, 1000)
  // } 

    gameLoop() {
      if (this.gameOver) {
        return;
      }
     
      setInterval(this.animateEnemies, 1000)
      
      this.update();
      
     
      window.requestAnimationFrame(() => this.gameLoop());
     
    }
  
    update() {
      this.plane.move();
      
    }
  
//what happends when game ends
  endGame() {

    this.plane.element.remove();

    this.enemies.forEach(enemy => {
      enemy.element.remove()
  });

// GameOver screen
  this.gameOver= true;

  this.gameArea.style.display= "none";
  
  this.gameFinished.style.display= "flex";

  this.body.style.backgroundImage= "url(../../images/gameover.jpg)";
 }
}