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
        this.speed=1;


      
        this.element = document.createElement("div");
      
        this.element.setAttribute("class", "missles");
        this.gameArea.appendChild(this.element);

        this.width= 5;
        this.element.style.width= `${this.width}px`;
        this.height=5;
        this.element.style.height= `${this.height}px`;


   
    }

//possible method to shoot
// shoot(e) {
// if( e.code === "Space"){
//     let missle = {
//         x: plane.x + planeWidth*15/32,
//         y: plane.y,
//         width: tileSize/8,
//         height: tileSize/2,

//     }
// }
// game.missles.push(missle);
// }


}
