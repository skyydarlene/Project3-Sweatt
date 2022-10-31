let y = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(125);

  y += speed; 
  rect(width/2,y,40,40);

  If (y > 400 || y < 0) { 
  speed *= -1;
  }
}



