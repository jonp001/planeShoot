
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
  
      // create all the enemy elements
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 12; col++) {
          const enemy = new Enemy(
            this.gameArea,
            row * 50 + 50,
            col * 50 + 50,
          );
          this.enemies.push(enemy);
        }
      }
    }
  
    gameLoop() {
      if (this.gameOver) {
        return;
      }
    
      this.update();
  


      // for (let i = 0; i < this.enemies.length; i++) {
      //   const enemy= this.enemies[i]
      //   enemy.move();
      
      //   if( obstacle.top > this.gameArea.height){

      //     this.score ++;
      //     this.gameScore.innerText= this.score;
  
      //     enemy.element.remove();
      //     this.enemies.splice(0,1);
      //     i--;
      //   } else if( this.plane.didCollide(enemy)){
  
      //     this.lives --;
      //     this.gameLives.innerText= this.lives;
  
      //     enemy.element.remove();
      //     this.enemies.splice(0,1);
      //     i--;
      //   }
      // }
      // if( this.lives=== 0){
      //   this.endGame();
      // }
      // if(Math.random() > 0.99 && this.enemies.length < 1){
      //   this.enemies.push(new Enemy(this.gameArea));
      // }
     
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
      this.plane.move();
      
      for (let i = 0; i < this.enemies.length; i++) {
        const enemy= this.enemies[i]
        
        enemy.move()
      
        if( enemy.top > this.height){

          this.score ++;
          this.gameScore.innerText= this.score;
  
          enemy.element.remove();
          this.enemies.splice(i,1);
          i--;
        } else if( this.plane.didCollide(enemy)){
  
          this.lives --;
          this.gameLives.innerText= this.lives;
  
          enemy.element.remove();
          this.enemies.splice(i,1);
          i--;
        }
      }
      if( this.lives=== 0){
        this.endGame();
      }
    
      
    }
  

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