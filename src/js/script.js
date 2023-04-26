import { Game } from "./game.js";





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
            }
  }
}

window.addEventListener("keydown", handleKeydown);



// const plane= new Plane();

// const updateGame =() => {
//     if (key["ArrowLeft"] {
//         plane.moveL();
//     } else if(key["ArrowRight"]) {
//         plane.moveR();
//     }

};

