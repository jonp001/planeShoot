export class Missle {

    constructor(gameArea,left, right, top, width, height) {
        this.gameArea= gameArea;
        this.left= left;
        this.right= right;
        this.top=top;
        this.width= width;
        this.height= height;
        this.directionX=0;
        this.directionY=0;
        this.speed=5;


      
        this.element = document.createElement("div");
      
        this.element.setAttribute("class", "missles");
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


shoot(e) {
if( e.code === "Space"){
    let missle = {
        x: plane.x + planeWidth*15/32,
        y: plane.y,
        width: tileSize/8,
        height: tileSize/2,

    }
}
game.missles.push(missle);
}












// move() {
//     this.left += this.directionX;
//     this.top += this.directionY;

//     if( this.left < 50){
//         this.left = 50;
//     }

//     if( this.left + this.width > this.gameArea.offsetWidth -50) {
//         this.left= this.gameArea.offsetWidth - this.width -50;
//     }
    
//     this.updatePosition();
//     } 

//     updatePosition() {
//         this.element.style.left = `${this.left}px`;
//         this.element.style.right = `${this.right}px`;

//     } 
// }



