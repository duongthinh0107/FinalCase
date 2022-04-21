class GameMode {
    constructor(mode) {
        this.mode = mode;


    }
    haveWall(){
        this.mode = true
    }

    haveNoWall(){
        this.mode = false;
    }

}