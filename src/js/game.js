
import { Plane } from "./plane.js";
import { Enemy } from "./enemy.js";
import { Missile } from "./missle.js";
import gameOverPic from "../../images/gameOver.jpeg";

export class Game {
    constructor() {
      this.container = document.querySelector(".container")
      this.gameScore = document.getElementById("score");
      this.gameLives = document.getElementById("lives");
      this.gameOverScreen= document.querySelector("#game-container")
      this.body= document.querySelector("body");
      this.gameFinished = document.getElementById("game-finished");
      this.gameOverText= document.getElementById("gameOverText");
      this.gameWinText= document.getElementById("gameWinText");
      this.score = 0;
      this.lives = 1;
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

      this.enemiesAnimationStarted = false;
     
    }

    startAnimatingEnemies() {
      if(!this.enemiesAnimationStarted){
        this.enemiesAnimationStarted = true; 
        this.animateEnemies();
      }
    }

    //this moves the enemies 
    animateEnemies() {
   let edgeReached = false;

   //this checks if enemy reaches edge of container
    for (let i=0; i< this.enemies.length; i++){
      const enemy= this.enemies[i];

      if(
        (this.direction === 1 && enemy.atRightEdge()) ||
        (this.direction === -1 && enemy.atLeftEdge())
      ) {
        edgeReached = true;
        break;
      }
    }

  //move enemies using direction & edge reached 
for( let i=0; i< this.enemies.length; i++) {
  const enemy= this.enemies[i];

  if(edgeReached) {
    enemy.row += 1;
    enemy.element.style.top= enemy.row * 60 + "px";

//checks for enemies that reached bottom of container
    if( enemy.row * 60 + enemy.height >= this.container.offsetHeight) {
      this.gameOver=true;
      this.endGame();
      return;
    }
  } else {
    if( this.direction === 1) {
      enemy.moveRight();
    } else {
      enemy.moveLeft();
    }
  }
}

if(edgeReached){
  this.direction *= -1
  }

  setTimeout(() => this.animateEnemies(), 1000);
} 
    
 gameLoop() {
      if (this.gameOver) {
        return;
      }
    
  this.startAnimatingEnemies();

  this.checkMissileEnemyCollision();

  this.update();

  this.updateMissiles();
  window.requestAnimationFrame(() => this.gameLoop());
     
    }

    updateMissiles() {
      for (let i = 0; i < this.plane.missiles.length; i++) {
        const missile = this.plane.missiles[i];

        missile.moveMissile();
    
        //this removes missles once it goes out of container 
        if (missile.x < 0 || missile.x > this.container.clientWidth ||
            missile.y < 0 || missile.y > this.container.clientHeight
          ) { 
        this.plane.missiles.splice(i, 1)
        missile.element.remove();
        i--;
     } else {

      //checks for collision between the missile and top of container
      const missileRect= missile.element.getBoundingClientRect();
      if(missileRect.top <= 0) {
        this.plane.missiles.splice(i,1);
        missile.element.remove();
        i--;
      }

      //checks for collision between the missiles & enenmies
      for(let j=0; j< this.enemies.length ; j++) {
        const enemy= this.enemies[j];
        if(this.missileHitEnemy(missile, enemy)) {
          this.enemies.splice(j, 1);
          enemy.element.remove();


          this.plane.missiles.splice(i, 1);
          missile.element.remove();
          i--;

          this.score += 25;
          this.gameScore.textContent= this.score
          break;
        }
      }
     }
    }
  }
  //sets parameters for the above code to function
  missileHitEnemy(missile, enemy) {
    const missileRect= missile.element.getBoundingClientRect();
    const enemyRect= enemy.element.getBoundingClientRect();

    return (
      missileRect.left < enemyRect.right &&
      missileRect.right > enemyRect.left &&
      missileRect.top < enemyRect.bottom &&
      missileRect.bottom > enemyRect.top
     );
    }

    update() {
      this.plane.move();
      
      // this.updateMissiles();
    

      for( let i=0; i<this.enemies.length; i++){
        const enemy= this.enemies[i];
      
      if(this.plane.didCollide(enemy)) {
        this.clearEnemies()
        this.lives = 0;
        this.gameOver= true;
        this.gameOverText.style.display="block";
       
       
        this.endGame();
      }
    }
    if( this.score >= 700){
      this.endGame();
      this.gameWinText.style.display="block";
     
    }
  }

clearEnemies() {
  Array.from (document.querySelectorAll(".enemy")).forEach((enemy) => {
    this.container.removeChild(enemy)
  })
} 

checkMissileEnemyCollision() {
  for (let i=0; i< this.plane.missiles.length; i++ ){
    const missile= this.plane.missiles[i];
  for (let j=0; j< this.enemies.length; j++){
    const enemy= this.enemies[j];
    const missileRect= missile.element.getBoundingClientRect();
    const enemyRect = enemy.element.getBoundingClientRect()
  
    if( missileRect.left < enemyRect.right &&
      missileRect.right > enemyRect.left &&
      missileRect.top < enemyRect.bottom &&
      missileRect.bottom > enemyRect.top 
      ) {
        //if collision occurs, remove both enemy & missle + update Score 
        enemy.element.remove();
        this.enemies.splice(j, 1);
        j--;

        missile  .element.remove();
        this.plane.missiles.splice(i, 1)
        i--;

        this.score +=25;
        this.gameScore.innerHTML= this.score
      }
    }
  }
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

   }
  }
