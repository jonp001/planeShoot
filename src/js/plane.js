import imgSrc from "../../images/plane.png";
import { Missle } from "./missle";


export class Plane {
  constructor(container, left, right, top, width, height) {
    this.container= container;
    this.left = left;
    this.right = right;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
   this.missles=[];
   this.missleSpeed=10;
   this.missleAngle=0;

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

updateMissles() {
  for (let i = 0; i < this.missiles.length; i++) {
    const missile = this.missiles[i];
    missile.move();
  }
}
  shootMissle() {
    const missle = new Missle(this.directionX, this.directionY, this.missleSpeed, this.missleAngle)
    this.missles.push(missle);
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


