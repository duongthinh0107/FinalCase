class Manager {
    constructor(snake, point, gameMode, ctx,render) {
        this.snake = snake;
        this.point = point;
        this.gameMode = gameMode;
        this.ctx = ctx;
        this.render = render;
    }

    detectCollision() {
        let headX = this.snake.head.x;
        let headY = this.snake.head.y;
        if (headX === this.point.x && headY === this.point.y) {
            point.clear();
            point.spawn()
            snake.body.push(new Vector())
        }
    }

    detectWall() {
        if (this.gameMode) {
            if (this.snake.head.x < 0 || this.snake.head.x > GAME_SIZE
                || this.snake.head.y < 0 || this.snake.head.y > GAME_SIZE) {
                this.lose();
            }
        } else {
            if (this.snake.head.x < 0) {
                this.snake.head.x = GAME_SIZE;
            }
            if (this.snake.head.x > GAME_SIZE) {
                this.snake.head.x = 0 - SNAKE_SIZE;
            }
            if (this.snake.head.y < 0) {
                this.snake.head.y = GAME_SIZE;
            }
            if (this.snake.head.y > GAME_SIZE) {
                this.snake.head.y = 0 - SNAKE_SIZE;
            }
        }
    }
    detectMySelf(){
        for (let i = 1; i < this.snake.body.length; i++) {
            if (this.snake.head.x === this.snake.body[i].x && this.snake.head.y === this.snake.body[i].y ){
                this.lose();
            }
        }

    }

    lose() {
        clearInterval(this.timeId)
        this.snake.clear();
        this.point.clear();
        this.ctx.fillStyle = BACKGROUND_COLOR;
        this.ctx.fillRect(this.point.x, this.point.y, SNAKE_SIZE, SNAKE_SIZE);
        document.getElementById('reset-btn').hidden = false;
        this.render.renderLoseText(0)
    }
    mode1Start(){
        this.gameMode.haveNoWall()
        mode1.hidden = true;
        mode2.hidden = true;
        startGame()
        board.drawGame()

    }

    mode2Start() {
        this.gameMode.haveWall();
        mode2.hidden = true;
        mode1.hidden = true;
        startGame()
        board.drawGame()





    }





}



