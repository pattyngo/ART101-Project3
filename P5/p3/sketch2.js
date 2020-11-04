//
// function setup() {
// 	createCanvas(1000, 1000);
// 	background(0);
// 	noStroke(); // I'm trying to remove the stroke here? no stroke means that my colors are all one big block, but leaving it like this leaves a trail of color
// }
//
//

var speed = 0.2;
var weight = 5;
var iterations = 25;
var spacing = 20.0;

function setup() {
  createCanvas(800, 500);
  frameRate(60);
}

function draw() {
background(255);
snails();
}

function snails() {
	// background(175, 224, 237);
//This is a snail
noStroke();
	fill (143, 189, 83);
	rect(125, 360, 10, 35, 20);//eyes

	fill (143, 189, 83)
	triangle(20, 460, 120,460, 70, 400,); // body

	fill (143, 189, 83);
	triangle (90,450,120,460,130,380); //neck

	fill (138, 63, 23);
	ellipse(70, 400, 100, 100); //shell
	push();
	translate (70,400);
	spiral();
	pop();

	fill (143, 189, 83);
	ellipse(130,400,40,40); // head

}

function spiral() {
  // for (int i = iterations; i>0; i--) {
	for (i = 1; i<iterations; i++) {
    push();
		noFill();
		scale(0.2);
    rotate(radians(speed*frameCount*(iterations-i)));
    strokeWeight(5);
    stroke(237, 192, 119);
    strokeCap(ROUND);
    drawArc(i*spacing);
    pop();
  }
}

function drawArc(size) {
  arc(0, 0, size, size, PI, 2*PI);
}
