import imgSrcTwo from "../../images/enemy.png";

const left = "left";
const right= "right";

export class Enemy {
    constructor(gameArea, top, left, width, height ){
        this.gameArea=gameArea;
        this.top=top;
        this.left=left;
        this.width= width;
        this.height=height;
        this.x=0;
        this.y=0;
        this.direction="left";
        this.speed= 1;
       

        

        this.gameArea= document.getElementById("game-area");
        this.element=document.createElement("img");
        this.element.src= imgSrcTwo;
        this.element.setAttribute("class", "enemyImage");
        this.gameArea.appendChild(this.element);

        this.enemyImg= document.getElementsByClassName("enemyImage");
        this.width=50;
        this.element.style.width= `${this.width}px`;
        this.height=50;
        this.element.style.height= `${this.height}px`



        // this.element.style.position="absolute";
        // this.left= 20;
        // this.element.style.left= `${this.left}px`
        this.top= 150;
        this.element.style.top= `${this.top}px`
        this.gameArea.appendChild(this.element);
    
    }
    
updatePosition() {
    this.element.style.left= `${this.left}px`
    this.element.style.top= `${this.top}px`
}

move() {


        this.x += 0.5;
        console.log("left", this.left)
        console.log("width", this.width)
        console.log("offsetwidth" , this.gameArea.offsetWidth)
    
        this.left= this.x + "px";

        this.element.style.left= this.left    
        this.element.style.position="absolute"

        // if( this.element.x + this.element.width >= this.gameArea.width || this.element.x <= 0) {
        //     this.x *= -2;
            
        //     for( let i=0; i< this.element.length; i++ ) {
        //         this.element[i].y +=this.element.height;
        
        console.log("hi")    


     if( this.left + this.width > this.gameArea.offsetWidth -50) {
    this.left= this.gameArea.offsetWidth - this.width -50;
  
}

    
    // // this.x += 1;
    // // this.left= this.x + "px";
    // // this.element.style.left= this.left  
 

    // this.y += .1;
    // this.top = this.y + "px";
    // this.element.style.top= this.top    

    // this.element.style.position="absolute"

    // // this.element.style.top= `${this.top}px`


    // if( this.left + this.width > this.gameArea.offsetWidth -50) {
    //     this.left= this.gameArea.offsetWidth - this.width -50;
    // }




    this.updatePosition();
}
// }
// enemyMove() {
//     setInterval(movingEnemy, 2000)
//     movingEnemy() 
//         const moveTop= this.top +=2;
//         const moveLeft= this.left +=2;

//         for( let i=0; i < this.enemies.length; i++ ) {
//             if( this.enemies[i].top < 651 && this.enemies[i].left < 301 ) {
//                 this.enemies[i].top = moveTop
//                 this.enemies[i].left = moveLeft;
//             } else if( this.enemies[i].top > 10 && this.enemies[i].left > 10){
//                 this.enemies[i].top--
//                 this.enemies[i].left--
// //             }
//         }
//     }
}