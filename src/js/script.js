import { Game } from "./game.js";
import { Missle } from "./missle.js";




window.onload= function () {

let game;
 

      
// function startGame() {
    console.log("Game started");

    game = new Game();

    // console.log("game: ", game)
    game.gameLoop();

   
    
// }

function handleKeydown(e) {
    const key = e.key;
    let shoot;
    console.log("key: ", key);

    const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];

    if(possibleKeystrokes.includes(key)) {
        e.preventDefault();

        switch(key){
            case "ArrowLeft":
                // console.log("hello: ", game.plane)
              game.plane.directionX = -1;
              break;
            case "ArrowRight":
                // console.log("hello: ", game.plane)
              game.plane.directionX = 1;
              break;
            // case "ArrowUp":
            //   game.plane.directionY = -1;
            //   break;
            // case "ArrowDown":
            //   game.plane.directionY = 1;
            //   break;
            case "Space":
              
        }
    

  }
}

window.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", shoot)



// const plane= new Plane();

// const updateGame =() => {
//     if (key["ArrowLeft"] {
//         plane.moveL();
//     } else if(key["ArrowRight"]) {
//         plane.moveR();
//     }

};

