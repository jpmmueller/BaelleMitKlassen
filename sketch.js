let ball1;
let ball2;
function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(100,100);
  ball2 = new Ball(200,100);
}

function draw() {
  background(220);
  ball1.show();
  ball2.show();
}
