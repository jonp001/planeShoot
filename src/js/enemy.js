import imgSrcTwo from "../../images/enemy.png";


export class Enemy {
    constructor(row, col) {

        this.row=row;
        this.col=col;
        this.top=0;
        this.element= document.createElement("div");
        this.element.classList.add("enemy");
        this.element.src= imgSrcTwo;
        this.container=document.querySelectorAll(".container");
        this.allEnemies= document.querySelectorAll(".enemy")
        
        

        //this sets the 
        this.element.style.top= this.row * 60 + "px";
        this.element.style.left = this.col * 80 + "px";
    }

moveRight () {
    this.col += 1;
    this.element.style.left= this.col * 50 + "px";
    this.speed=0
}

moveLeft() {
    this.col -= 1;
    this.element.style.left = this.col * 100 + "px";
    this.speed=0
}

atLeftEdge () {
    return this.col === 0;
}

atRightEdge () {
    return this.col === 7;
}


getElement() {
    return this.element
   
  }
}