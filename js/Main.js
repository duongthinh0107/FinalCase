let body = document.getElementsByTagName("body")[0];

let btn = document.createElement('div');
btn.id = 'button-mode';
btn.class = 'button-mode';
body.appendChild(btn);

let mode1 = document.createElement('a');
mode1.id = 'no-wall'
btn.appendChild(mode1);

let span1 = document.createElement('span');
span1.innerText = 'XWall'
mode1.appendChild(span1);

let mode2 = document.createElement('a');
mode2.id = 'wall'
btn.appendChild(mode2);


let span2 = document.createElement('span');
span2.innerText = 'Wall'
mode2.appendChild(span2);



let div = document.createElement('div');
div.id = "container"
div.style.textAlign = 'center'
body.appendChild(div);
let score = document.createElement('h2');
score.id = 'ui';
score.innerText = 'Score:00'
div.appendChild(score);
let canvas = document.createElement('canvas');
canvas.id = "canvas";
canvas.width = canvas.height = GAME_SIZE;
canvas.style.backgroundColor = BACKGROUND_COLOR;
div.appendChild(canvas);

let author = document.createElement('div');
author.id = 'author';
div.appendChild(author);

let h1 = document.createElement('h1');
h1.innerText = 'Giun';
author.appendChild(h1);

let span = document.createElement('span');
span.innerText = 'Cầm Cập';
author.appendChild(span);

let button_reset = document.createElement('button');
button_reset.id = 'reset-btn';
button_reset.hidden = true;
body.appendChild(button_reset);

let tag_i = document.createElement('i');
tag_i.id = 'reset';
tag_i.innerText = 'Reset';
button_reset.appendChild(tag_i);





let ctx = canvas.getContext('2d');

let gameMode = new GameMode(false);
let board = new Board(ctx);
board.drawGrid(40,FROM_X,FROM_Y,GAME_SIZE);
let point = new Point(ctx);
point.spawn();
let snake = new Snake(ctx,board);
snake.draw();
let render = new Render(ctx);
render.renderScore(score,0);
let manager = new Manager(snake,point,gameMode.mode,ctx,render);

board.drawCanvas();
mode1.addEventListener('click',manager.mode1Start);
mode2.addEventListener('click',manager.mode2Start);



let timeID;
function startGame(){
 timeID = setInterval(function () {
    snake.clear();
    snake.draw();
    snake.move();
    manager.timeId = timeID;
    manager.detectCollision();
    manager.detectWall();
    manager.detectMySelf();
}, 100)}



let snakeIndex = new Vector(-1, 0);

document.onkeydown = e => {
    switch (e.key) {
        case LEFT:
            if (snakeIndex.x === 1) break;
            snake.speed = new Vector(-1, 0);
            snakeIndex = new Vector(-1, 0);
            break;
        case RIGHT:
            if (snakeIndex.x === -1) break;
            snake.speed = new Vector(1, 0);
            snakeIndex = new Vector(1, 0);
            break;
        case UP:
            if (snakeIndex.y === 1) break;
            snake.speed = new Vector(0, -1);
            snakeIndex = new Vector(0, -1);
            break;
        case DOWN:
            if (snakeIndex.y === -1) break;
            snake.speed = new Vector(0, 1);
            snakeIndex = new Vector(0, 1);
            break;
    }
}