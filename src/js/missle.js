export class Missle {
constructor(x, y, angle, speed ) {
this.height= 5;
this.width= 5;
this.top= 0;
this.x=x;
this.y=y;
this.speed= speed;
this.angle= angle;

this.element = document.createElement("div"); 
this.element.classList.add ("missle");

this.container= document.querySelector(".container")
this.missle.appendChild(this.element);

}

moveMissle() {
this.x += Math.cos(this.angle) * this.speed;
this.y += Math.sin(this.angle) * this.speed;
  }
}

