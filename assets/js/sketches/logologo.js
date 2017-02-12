var dd = 10;

function setup() {
  createCanvas(540, 280);
  frameRate(25);
  textSize(92).textFont("Courier New").textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  fill(0)
  text("plomo", width/2+random(-dd,dd), height/2+random(-dd,dd));
  fill(0);
  text("plomo", width/2+random(-dd,dd), height/2+random(-dd,dd));
}