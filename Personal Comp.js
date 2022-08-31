function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(200, 0, 200);
    line(20, 50, 420, 110);

    rectMode(CENTER);
    rect(200, 150, 150, 150);

    fill(255, 0, 0);
    ellipse(150, 100, 100, 100);

    fill(0, 255, 0);
    ellipse(120, 80, 80, 80);

    fill(0, 0, 255);
    ellipse(100, 60, 60, 60);
}