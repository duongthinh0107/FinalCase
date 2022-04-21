class Snake {
    constructor(ctx,board) {
        this.body = [
            new Vector(SNAKE_SIZE * 3
                , SNAKE_SIZE * 5)
        ]
        this.speed = new Vector(1, 0)
        this.head = this.body[0];
        this.ctx = ctx;
        this.board = board;
    }
    draw(){
        ctx.fillStyle = SNAKE_COLOR;
        ctx.fillRect(this.head.x,this.head.y,SNAKE_SIZE,SNAKE_SIZE)
        for (let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, SNAKE_SIZE, SNAKE_SIZE)
        }
        this.board.drawGrid(40,FROM_X,FROM_Y,GAME_SIZE)
    }
    clear() {
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(this.body[i].x , this.body[i].y, SNAKE_SIZE , SNAKE_SIZE)

        }
    }
    move(){
        this.clear();
        for (let i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //set vi tri moi cho head-------------------------
        this.head.x += this.speed.x * SNAKE_SIZE;
        this.head.y += this.speed.y * SNAKE_SIZE;
        this.draw();
    }

}