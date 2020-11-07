let img;
let yel;
let gr;

var NORTH = 1;
var EAST = 2;
var SOUTH = 4;
var WEST = 8;
var result;
var x,y;

function preload() {
  img = loadImage('assets/sk.jpg');
  yel = loadImage('assets/yel.png');
  gr = loadImage('assets/green.png');
}
function setup() {
  createCanvas(1400,824);
  background(img);
  result = 0;
  x = width/2;
  y = height/2;
  rectMode(CENTER);
}

function draw() {
  background(img);
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
  image(gr,0,0,60,60);
  pop();
  follow();
}

function follow() {
  translate(x+25,y);
  image(yel,0,0,60,60);
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
