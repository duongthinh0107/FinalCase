class Point {
    constructor(ctx) {
        this.ctx = ctx;
    }
    getRandomNumber (){
        let randomNumber = Math.floor(Math.random()  * MAX_SIZE);
        randomNumber -= randomNumber % SNAKE_SIZE;
        return randomNumber;
    }
    clear(){
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(this.x,this.y,SNAKE_SIZE,SNAKE_SIZE)
    }
    getRandomColor() {
        return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    }
    draw(){
        this.color = this.getRandomColor();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,SNAKE_SIZE,SNAKE_SIZE)
    }
    spawn (){
        this.x = this.getRandomNumber();
        this.y = this.getRandomNumber();
        this.draw();
        console.log(this.x)
        console.log(this.y)
    }
}