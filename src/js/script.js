import { Game } from "./game.js";
import { Missle } from "./missle.js";




window.onload= function () {


 
    console.log("Game started");

   const game = new Game();

    // console.log("game: ", game)
    game.gameLoop();

 
   
    


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
              plane.shootMissle();


              
        }
    document.addEventListener('keydown', event => {
      if (event.code === 'Space') {
      plane.shootMissile();
       }
     });

  }
}


window.addEventListener("keydown", handleKeydown);


}
