function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('yellow')
  const c1 = color('magenta');
  const c2 = color('cyan');
  for (let index = 0; index < 50; index++) {
    if (index % 2 == 0) {
      fill(c1);
      square(random(300), random(300), random(80));
    } else {
      fill(c2);
      circle(random(400), random(400), random(60));
    } 
  }
  noLoop();
}
