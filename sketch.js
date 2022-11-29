function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill (255, 2555, 0);
  beginShape();
  for (let i=0; i<9;i++){
    vertex (random (width), random (height))
    endShape(CLOSE)
  }}

  function mousePressed(){
    let fs=fullscreen();
    fullscreen(!fs);
}
