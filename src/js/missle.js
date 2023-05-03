import missleSrc from "../../images/missile.png"


export class Missile {
constructor(x, y, speed, angle, container) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.angle = angle;
  this.container = container;
 

  this.element = document.createElement("img");
  this.element.src= missleSrc
  this.element.className = "missile";
  this.container.appendChild(this.element);

  this.updatePosition();
}

moveMissile() {
  this.y -= this.speed * Math.cos(this.angle);
  this.x += this.speed * Math.sin(this.angle);
  this.updatePosition();
}

updatePosition() {
  this.element.style.left = `${this.x}px`;
  this.element.style.top = `${this.y}px`;
}
}
