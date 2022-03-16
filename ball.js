class Ball {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 16;
        this.yspeed = 0;
    }

    show(){
        circle(this.x, this.y, this.r * 2);
    }

    update(){
        this.y = this.y + this.yspeed;
        this.yspeed = this.yspeed + 0.03;
    }
}