class Render {
    constructor(ctx) {
        this.ctx = ctx;
    }
    renderLoseText(count){
        ctx.fillStyle = 'white'
        ctx.font = '100px Comic Sans MS'
        ctx.textAlign = 'center'
        ctx.fillText(`Score:${count}`, 400, 500);
        ctx.fillText('Lose', 360, 400);

    }
    renderScore(score,count){
        score.innerHTML = `Score:${count}`;
    }

}