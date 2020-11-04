var stars = []
var speed =7;
var pm =0;

function setup() {
  createCanvas(1200,600);
  background(175, 224, 237);
  fill(255);
  angleMode(radians);
  noStroke();
  for (var i = 0; i < 400; i++) {
        stars[i] = new Star();
    }

}

function draw() {
  if (pm == 1) {
    background(0);
} else {
    background(175, 224, 237);
}
// for (var i = 0; i < width; i += 100) {
// stroke(44, 120, 14);
// line(i, 0, i, height);
//
// }

   snails();
}


var x = 100;
var y = 500;

function snails() {

let h = hour();
let m = minute();
let s = second();

if (h > 11 ) {
   pm = 1;
   for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
}
} else {
   pm = 0;
 }

let maph = map(h, 0, 23, 0, width);
let mapm = map(m, 0, 59, 0, width);
let maps = map(s, 0, 59, 0, width);

   console.log(h);

push ()
scale(0.5)
translate (maps,-300)
snail();
pop();

push ()
scale(0.8)
translate (mapm,-100)
snail();
pop();

push ()
scale(1);
translate (maph,80)
snail();
pop();

}


function snail() {
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



var speed = 0.2;
var weight = 5;
var iterations = 25;
var spacing = 20.0;

function spiral() {
  // for (int i = iterations; i>0; i--) {
	for (i = 1; i<iterations; i++) {
    push();
		noFill();
		scale(0.2);
    rotate(radians(speed*frameCount*(iterations-i)));
    strokeWeight(10);
    stroke(184, 143, 79);
    strokeCap(ROUND);
    drawArc(i*spacing);
    pop();
  }
}

function drawArc(size) {
  arc(0, 0, size, size, PI, 2*PI);
}

function Star() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

    this.update = function() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    this.show = function() {
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);
    }
}
