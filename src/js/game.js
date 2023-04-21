

export class Game {
    constructor() {
        this.gameArea=document.getElementById("game-area");
        this.gameScore=getElementById("score");
        this.gameLives=getElementById("lives");
        this.gameFinished=getElementById("game-finished");
        this.enemies=[];
        this.score=0;
        this.lives=4;
        this.gameOver= false;

        this.width= 600;
        this.gameArea.style.width= `${this.width}px`;
        
        this.height=500;
        this.gameArea.style.height= `${this.height}px`;
    }

}

