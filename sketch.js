let img;
let mask;

function preload() {
  img = loadImage("assets/purple2.jpeg");
  mask = loadImage("assets/black4.png");
}

function setup() {
  createCanvas(1800,800);
  imageMode(CENTER);
}

function draw() {
  image(img,width/2,height/2);  
  image(mask, mouseX, mouseY);
}
