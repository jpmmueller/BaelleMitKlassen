let ball1;
let ball2;
let Balls = [];
function setup() {
  createCanvas(600, 800);

}

function draw() {
  background(220);

  for (let ball of Balls){
    ball.show();
    ball.update();
  }
  for (let i = Balls.length - 1;i >= 0; i--){
    if (Balls[i].y > height){
      Balls.splice(i,1);
    }
  }
}
function mousePressed(){
  Balls.push(new Ball(mouseX, mouseY));
  console.log(Balls);
}
