
import { Plane } from "./plane.js";
import { Enemy } from "./enemy.js";
import { Missile } from "./missle.js";

export class Game {
    constructor() {
      this.container = document.querySelector(".container")
      this.gameScore = document.getElementById("score");
      this.gameLives = document.getElementById("lives");
      this.gameOverScreen= document.querySelector("#game-container")
      this.body= document.querySelector("body");
      this.gameFinished = document.getElementById("game-finished");
      this.score = 0;
      this.lives = 4;
      this.gameOver = false;
      this.plane = new Plane(
        this.container,
        300,
        300,
        650,
        100,
        150,
        "../../images/plane.png"
      );
      
      this.enemies = [];
      this.width = 600;
      this.container.style.width = `${this.width}px`;
      this.height = 600;
      this.container.style.height = `${this.height}px`;
      

      // create all the enemy elements
      for ( let i= 0; i< 4; i++ ) {
        for( let j=0; j < 7; j++ ) {
          const enemy= new Enemy( i, j);
          this.container.appendChild(enemy.getElement());
          this.enemies.push(enemy); 
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
    }
    gameLoop() {
      if (this.gameOver) {
        return;
      }
    
      setInterval(this.animateEnemies, 1000*2)
      
      this.update();
      
      
     
    
     window.requestAnimationFrame(() => this.gameLoop());
     
    }
  
    update() {
      this.plane.move();
      
     
     

      for( let i=0; i<this.enemies.length; i++){
        const enemy= this.enemies[i];
      
      if(this.plane.didCollide(enemy)) {
        this.clearEnemies()
        this.lives = 0;
        this.gameOver= true;
        this.endGame()
      }
    }
  }

clearEnemies() {
  Array.from (document.querySelectorAll(".enemy")).forEach((enemy) => {
    this.container.removeChild(enemy)
  })
} 


//what happends when game ends
  endGame() {

    this.plane.element.remove();

    this.enemies.forEach(enemy => {
      enemy.element.remove()
  });

// GameOver screen
  this.gameOver= true;

  this.container.style.display= "none";
  
  this.gameFinished.style.display= "flex";

  this.gameOverScreen.style.display= "none";

  this.body.style.backgroundImage= "url(../../images/gameOver.png)";
 }
    }
  