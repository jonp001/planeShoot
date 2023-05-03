import imgSrc from "../../images/plane.png";
import { Missile } from "./missle.js";


export class Plane {
  constructor(container, left, right, top) {
    this.container= container;
    this.left = left;
    this.right = right;
    this.top = top;
    this.directionX = 0;
    this.directionY = 0;
   this.missiles=[];
   this.missileSpeed=10;
   this.missileAngle=0;

    this.container = document.querySelector(".container");
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.setAttribute("id", "planeImg");
    this.container.appendChild(this.element);

    this.width = 60;
    this.element.style.width = `${this.width}px`;
    this.height = 60;
    this.element.style.height = `${this.height}px`;

 

    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

  }

  move() {
    this.left += this.directionX;
    this.right -= this.directionX;

    if (this.left < 50) {
      this.left = 50;
    }

    if (this.left + this.width > this.container.offsetWidth - 50) {
      this.left = this.container.offsetWidth - this.width - 50;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.right = `${this.right}px`;
  }

updateMissiles() {
  for (let i = 0; i < this.missiles.length; i++) {
    const missile = this.missiles[i];
    missile.moveMissile();

    //this removes missles once it goes out of container 
    if (missile.x < 0 || missile.x > this.container.clientWidth ||
      missile.y < 0 || missile.y > this.container.clientHeight) {
    this.missiles.splice(i, 1);
    i--;
  }
 }
}

  shootMissle() {
    const missile = new Missile(this.left + this.width/2 , this.top, this.missileSpeed, this.missileAngle, this.container);
    this.missiles.push(missile);
  }
  
  

  didCollide(enemy) {
    const planeRect = this.element.getBoundingClientRect();
    const enemyRect = enemy.element.getBoundingClientRect();

    if (
      planeRect.left < enemyRect.left &&
      planeRect.right > enemyRect.left &&
      planeRect.top < enemyRect.top &&
      planeRect.bottom > enemyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}


