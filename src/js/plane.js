import imgSrc from "../../images/plane.png";

export class Plane {
    constructor(left, top, width, height, gameArea) {
        this.gameArea= gameArea
        this.left= left;
        this.top=top;
        this.width= width;
        this.height= height;
        this.directionX=0;
        this.directionY=0;
        this.speed=5;


        this.gameArea=document.getElementById("game-area");
        this.element = document.createElement("img");
        this.element.src= imgSrc;
        this.element.setAttribute("id", "planeImg");
        this.gameArea.appendChild(this.element);

        this.width= 120;
        this.element.style.width= `${this.width}px`;
        this.height=120;
        this.element.style.height= `${this.height}px`;

        this.positionX= window.innerWidth / 6.5;
        this.element.style.left= `${this.positionX}px`;

        this.positionY= window.innerHeight - 400;
        this.element.style.top= `${this.positionY}px`;
    }

moveR() {
    this.positionX(this.x + this.speed)
}
   moveL() {
    this.positionX(this.x - this.speed)
   }
}