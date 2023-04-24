import imgSrcTwo from "../../images/enemy.png";



export class Enemy {
    constructor(gameArea, height, width, top, left){
        this.gameArea=gameArea;
        this.height=height;
        this.width=width;
        this.top=top;
        this.left=left;

        this.gameArea= document.getElementById("game-area");
        this.element=document.createElement("img");
        this.element.src= imgSrcTwo;
        this.element.setAttribute("id", "enemyImage");
        this.gameArea.appendChild(this.element);

        this.width=60;
        this.element.style.width= `${this.width}px`;
        this.height=60;
        this.element.style.height= `${this.height}px`


        this.element.style.position="absolute";
        this.element.style.left= `${this.left}px`
        this.element.style.top= `${this.top}px`

    }
}