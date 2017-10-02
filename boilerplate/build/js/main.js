function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(127,0,0);
  } else {
    fill(255,0,0);
  }
  rect(mouseX, mouseY, 80, 80);
}