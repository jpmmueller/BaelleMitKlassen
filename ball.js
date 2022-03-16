class Ball {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 16;
    }

    show(){
        circle(this.x, this.y, this.r * 2);
    }
}