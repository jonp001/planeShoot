
import { Plane } from "./plane.js";
import { Enemy } from "./enemy.js";

export class Game {
    constructor() {
      this.gameArea = document.getElementById("game-area");
      this.gameScore = document.getElementById("score");
      this.gameLives = document.getElementById("lives");
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
      this.width = 600;
      this.gameArea.style.width = `${this.width}px`;
      this.height = 500;
      this.gameArea.style.height = `${this.height}px`;
      this.x = 0;
      this.y = 0;
  
      // create all the enemy elements
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 12; col++) {
          const enemy = new Enemy(
            this.gameArea,
            row * 50 + 50,
            col * 50 + 50
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
  
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].move();
      }
  
      window.requestAnimationFrame(() => this.gameLoop());
    }
  
    update() {
      this.plane.move();
    //   this.enemy.move();
    }
  }
  
