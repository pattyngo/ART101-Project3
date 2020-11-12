
let middle;
let up;
let down;

var NORTH = 1;
var EAST = 2;
var SOUTH = 4;
var WEST = 8;
var result;
var x,y;

function preload() {
  middle = loadImage('assets/bna1.png');
  down = loadImage('assets/bna2.png');
  up = loadImage('assets/bna3.png');

}
function setup() {
  createCanvas(300,300);
  result = 0;
  x = width/2;
  y = height/2;
  rectMode(CENTER);
}

function draw() {
  background(200);
  switch(result) {
    case NORTH: y--; break;
    case EAST: x++; break;
    case SOUTH: y++; break;
    case WEST: x--; break;
    case NORTH|EAST: y--; x++; break;
    case NORTH|WEST: y--; x--; break;
    case SOUTH|EAST: y++; x++; break;
    case SOUTH|WEST: y++; x--; break;
  }
  push();
  translate(x,y);
  scale(2);
  bna();
  pop();
}

function bna() {
  if (mouseY < 100) {
    image (up,0,0);
  }
  if (mouseY > 100 && mouseY < 200){
      image(middle,0,0);
  }
  if (mouseY > 200) {
    image (down,0,0);
  }

}

function keyPressed(){
  switch(key) {
    case('w'):case('W'):result |=NORTH;break;
    case('d'):case('D'):result |=EAST;break;
    case('s'):case('S'):result |=SOUTH;break;
    case('a'):case('A'):result |=WEST;break;
  }
}

function keyReleased(){
  switch(key) {
    case('w'):case('W'):result ^=NORTH;break;
    case('d'):case('D'):result ^=EAST;break;
    case('s'):case('S'):result ^=SOUTH;break;
    case('a'):case('A'):result ^=WEST;break;
  }
}
