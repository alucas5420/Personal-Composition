// Setting up the canvas to draw the images on

function setup() {
    createCanvas(400, 300);
}

// Draws the images

function draw() {
    background(200, 0, 200);
    line(20, 50, 420, 110); // Draws a line

    rectMode(CENTER); // Centers the rectangle
    rect(200, 150, 150, 150); // Draws a rectangle

    fill(255, 0, 0); // Fills in the color
    ellipse(150, 100, 100, 100); // Makes a circle

    fill(0, 255, 0); // Fills in the color
    ellipse(120, 80, 80, 80); // Makes a circle

    fill(0, 0, 255); // Fills in the color
    ellipse(100, 60, 60, 60); // Makes a circle
}