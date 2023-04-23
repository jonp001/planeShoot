import imgSrc from "../../images/plane.png";


export class Plane {
    constructor(gameArea, left, right, top, width, height) {
        this.gameArea= gameArea;
        this.left= left;
        this.right= right;
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

        this.width= 60;
        this.element.style.width= `${this.width}px`;
        this.height=60;
        this.element.style.height= `${this.height}px`;

        // this.positionX= window.innerWidth / 6.5
        // this.element.style.left= `${this.positionX}px`

        // this.positionY= window.innerHeight - 400
        // this.element.style.top= `${this.positionY}px`

        this.element.style.position="absolute";
        this.element.style.left= `${this.left}px`;
        this.element.style.top= `${this.top}px`;
   
    }

move() {
    this.left += this.directionX;
    this.right -= this.directionX;

    if( this.left < 50){
        this.left = 50;
    }

    if( this.left + this.width > this.gameArea.offsetWidth -50) {
        this.left= this.gameArea.offsetWidth - this.width -50;
    }
    
    this.updatePosition();
    } 

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.right = `${this.right}px`;

    } 
}
