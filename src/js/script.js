import { Game } from "./game.js";

import {Plane} from "./plane.js";
new Plane();


window.onload= function () {

let game;

function startGame() {
    console.log("Game started");

    game = new Game();
    game.start();
}

function handleKeydown(e) {
    const key = e.key;

    console.log("key: ", key);

    const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];

    if(possibleKeystrokes.includes(key)) {
        e.preventDefault();

        switch(key) {
            case "ArrowLeft":
                game.plane.directionX= -1;
                break;
                case "ArrowRight": 
                game.plane.directionX= +1;
                break;
    }
  }
}

window.addEventListener("keydown", handleKeydown);
};   