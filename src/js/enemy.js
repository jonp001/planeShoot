import imgSrcTwo from "../../images/enemy.png";


export class Enemy {
    constructor(row, col) {

        this.row=row;
        this.col=col;
        this.element= document.createElement("img");
        this.element.classList.add("enemy");
        this.element.src= imgSrcTwo;

        
        
        

        //this sets the 
        this.element.style.top= this.row * 60 + "px";
        this.element.style.left = this.col * 80 + "px";
    }

moveRight () {
    this.col += 1;
    this.element.style.left= this.col * 50 + "px";
}

moveLeft() {
    this.col -= 1;
    this.element.style.left = this.col * 100 + "px";
}

atLeftEdge () {
    return this.col === 0;
}

atRightEdge () {
    return this.col === 7;
}

atBottomScreen() {
    if (Plane.element.style.top > this.element.top){
  return this.element
}
}
getElement() {
    return this.element;
   
  }
}