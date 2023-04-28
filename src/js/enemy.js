import imgSrcTwo from "../../images/enemy.png";



export class Enemy {
    constructor(gameArea, top, left){
        this.gameArea=gameArea;
        this.top=top;
        this.left=left;
        this.directionX=0;
        this.directionY=0;

        this.gameArea= document.getElementById("game-area");
        this.element=document.createElement("img");
        this.element.src= imgSrcTwo;
        this.element.setAttribute("class", "enemyImage");
        this.gameArea.appendChild(this.element);

        this.width=50;
        this.element.style.width= `${this.width}px`;
        this.height=50;
        this.element.style.height= `${this.height}px`



        // this.element.style.position="absolute";
        this.left= 20;
        this.element.style.left= `${this.left}px`
        this.top= 20;
        this.element.style.top= `${this.top}px`
        this.gameArea.appendChild(this.element);
    }
    
updatePosition() {
    this.element.style.left= `${this.left}px`
    this.element.style.top= `${this.top}px`
}

move() {
    this.top+= 2;
    this.left+= 2;


    if( this.left < 50){
        this.left = 50;
    }

    if( this.left + this.width > this.gameArea.offsetWidth -50) {
        this.left= this.gameArea.offsetWidth - this.width -50;
    }




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



