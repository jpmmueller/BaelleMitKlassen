let ball1;
let ball2;
let Balls = [];
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);


  for (let i = 0; i < Balls.length; i++){
    Balls[i].show();
  }
  // console.log(Balls);
}
function mousePressed(){
  Balls.push(new Ball(mouseX, mouseY));
  console.log(Balls);
}
