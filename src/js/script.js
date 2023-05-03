import { Game } from "./game.js";
import { Missile } from "./missle.js";




window.onload= function () {


 
    console.log("Game started");

   const game = new Game();

    game.gameLoop();

  document.addEventListener("keydown", handleKeydown)
  document.addEventListener("keyup", handleKeyUp)


  
function handleKeydown(e) {
    const key = e.key;
    let shoot;
    console.log("key: ", key);

    const possibleKeystrokes = ["ArrowLeft", "ArrowRight", " "];

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
              case " ":
                console.log("shoot pressed")
                game.plane.shootMissle();
                break;
                       
    }
  }
}

function handleKeyUp(e) {
  const key=e.key;

  const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];

  if(possibleKeystrokes.includes(key)) {
    e.preventDefault();

    switch(key) {
      case "ArrowLeft":
      case "ArrowRight":
        game.plane.directionX = 0;
        break;
     }
   }
 }
};
