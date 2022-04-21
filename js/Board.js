class Board {
    constructor(ctx) {
        this.ctx = ctx
        this.ctx.lineWidth = LINE_WIDTH;
        this.ctx.strokeStyle = GAME_COLOR;
    }
    drawCanvas(){
        this.ctx.fillStyle = GAME_COLOR;
        this.ctx.fillRect(0,0,canvas.width,canvas.height)
    }
    drawGame(){
        this.ctx.fillStyle = BACKGROUND_COLOR
        this.ctx.fillRect(0,0,canvas.width,canvas.height)
    }

    drawVer (f,fromX,fromY,distance) {
            ctx.beginPath();
            ctx.moveTo(fromX, fromY+ f);
            ctx.lineTo(fromX + distance, fromY+ f);
            ctx.stroke();

    }
    drawHor (f,fromX,fromY,distance){
            ctx.beginPath();
            ctx.moveTo(fromX + f,fromY );
            ctx.lineTo(fromX + f, fromY+ distance);
            ctx.stroke();


    }
    drawGrid(loopNumber,fromX,fromY,distance){
    for (let i = 0; i < loopNumber; i++) {
        let f = SNAKE_SIZE * i;
        this.drawVer(f,fromX,fromY,distance)
        this.drawHor(f,fromX,fromY,distance)
    }

    }


}
