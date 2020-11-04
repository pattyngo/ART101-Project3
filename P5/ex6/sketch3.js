


// let's name some variables :)

  var x; // where the spectrum starts (y)
  var end; // where the spectrum ends (y)
  var totalSize; // height of the spectrum

  // color values
  var rd;
  var gr;
  var bl;

  // array of colors in spectrum
  var colorAtTime;
  var array;
  var arrayR;
  var arrayG;
  var arrayB;

  // the colors at the specific time (what you're hovering over)
  var rNow;
  var gNow;
  var bNow;
  var colNow;

  // the colors you've selected
  var rChoice;
  var gChoice;
  var bChoice;

  // size of the screen that is for the slider
  var sliderSide;

  //stoke size
  var g = 10;
  var angle = 0;

  //paint
  var points = [];
  var painting = false;
  var strokeNumber = 0;
  var numClosePoints = 10;



function setup() {
  createCanvas(800,800);
  smooth();
  background(255);

  x = 100;
  end = height-100;
  totalSize = height-200;

  rd = 255;
  gr = 0;
  bl = 0;

  rChoice = 0;
  gChoice = 0;
  bChoice = 0;

  sliderSide = 100;

  array = [rd+", "+gr+", "+bl];
  arrayR = [rd];
  arrayG = [gr];
  arrayB = [bl];

  // rectangle at the bottom that will represent the color hovered on or selected
  rect(20,height-75,50,50);

  // drawing pad
  rect(sliderSide, 100, 680, height-200);

  push();
  fill(130);
  textSize(50);
  noStroke();
  text("Patty's Drawing Tool",sliderSide,30,width,50);
  pop();

}




function draw() {
  colorPicker(100 + totalSize/6, 100 + totalSize/3, 100 + totalSize/2, 100 + totalSize*2/3, 100 + totalSize*5/6, 100 + totalSize);
  choice();

}



// function to make rectangles for the spectrum
function makeRect(y){
  noStroke();
  rect(20, y, 50, 1);
}



// function for whole color picker spectrum; increments represent the six segments of color changing
function colorPicker(increment1, increment2, increment3, increment4, increment5, increment6){


  while(x < increment1){
    fill(0);            // this is here just in case I want to add a darker color option/slider later
    makeRect(x);        // same as above
    fill(rd, gr, bl);   // fills the color of rectangle
    makeRect(x);        // makes rectangles incrementing by 1 pixel in height
    x += 1;
    bl += 3.825;        // each rectangle changes color by this amount

    colorAtTime = rd+", "+gr+", "+bl;
    append(array, colorAtTime);       // adds the color values of the rectangle to an array
    append(arrayR, rd);               // adds the red value of the rectangle to an array
    append(arrayG, gr);               // adds the green value of the rectangle to an array
    append(arrayB, bl);               // adds the blue value of the rectangle to an array

  }
  while(x >= increment1 && x < increment2){
    fill(0);
    makeRect(x);
    fill(rd, gr, bl);
    makeRect(x);
    x += 1;
    rd -= 3.825;

    colorAtTime = rd+", "+gr+", "+bl;
    append(array, colorAtTime);
    append(arrayR, rd);
    append(arrayG, gr);
    append(arrayB, bl);
  }
  while(x >= increment2 && x < increment3){
    fill(0);
    makeRect(x);
    fill(rd, gr, bl);
    makeRect(x);
    x += 1;
    gr += 3.825;

    colorAtTime = rd+", "+gr+", "+bl;
    append(array, colorAtTime);
    append(arrayR, rd);
    append(arrayG, gr);
    append(arrayB, bl);
  }
  while(x >= increment3 && x < increment4){
    fill(0);
    makeRect(x);
    fill(rd, gr, bl);
    makeRect(x);
    x += 1;
    bl -= 3.825;

    colorAtTime = rd+", "+gr+", "+bl;
    append(array, colorAtTime);
    append(arrayR, rd);
    append(arrayG, gr);
    append(arrayB, bl);
  }
  while(x >= increment4 && x < increment5){
    fill(0);
    makeRect(x);
    fill(rd, gr, bl);
    makeRect(x);
    x += 1;
    rd += 3.825;

    colorAtTime = rd+", "+gr+", "+bl;
    append(array, colorAtTime);
    append(arrayR, rd);
    append(arrayG, gr);
    append(arrayB, bl);
  }
  while(x >= increment5 && x < increment6){
    fill(0);
    makeRect(x);
    fill(rd, gr, bl);
    makeRect(x);
    x += 1;
    gr -= 3.825;

    colorAtTime = rd+", "+gr+", "+bl;
    append(array, colorAtTime);
    append(arrayR, rd);
    append(arrayG, gr);
    append(arrayB, bl);
  }
}


// function for whatever you're hovering over
function choice(){

  if(mouseX > 20 && mouseX < 70){
    if(mouseY >= 100 && mouseY < 100 + totalSize){

      value = mouseY-100        // this is to get determine where in the array you are (because at mouseY = 100, you're at the 0 index of the array)

      rNow = arrayR[value];     // sets the red value of what you're hovering over, from the array
      gNow = arrayG[value];     // sets the green value of what you're hovering over, from the array
      bNow = arrayB[value];     // sets the blue value of what you're hovering over, from the array

      if(rNow < 0){             // this is to deal with any math that made the value less than 0
        rNow = 0;
      }
      if(rNow > 255){           // this is to deal with any math that made the value greater than 255
        rNow = 255;
      }
      if(gNow < 0){
        gNow = 0;
      }
      if(gNow > 255){
        gNow = 255;
      }
      if(bNow < 0){
        bNow = 0;
      }
      if(bNow > 255){
        bNow = 255;
      }

    }
  }
  // else{
  //   fill(255);
  // }
  fill(rChoice, gChoice, bChoice);
  rect(20, height-75,50,50);    // this creates the rectangle at the bottom (but now, it's filled in w/ the color you're hovering over OR you have selected)

}



function mousePressed(){


// this is to say: if you press on any part of the spectrum, you will make display the selected color at the rectangle AND fill in the rectangle at the bottom
  if(mouseY >= 100 && mouseY < 100 + totalSize){
    if(mouseX > 20 && mouseX < 70){
      push();
        fill(rChoice, gChoice, bChoice);
        noStroke();
        rectMode(CENTER)
        rect(sliderSide/2,70,sliderSide,50);
      pop();

      // setting the color so that it can be used on the drawing pad
      rChoice = rNow;
      gChoice = gNow;
      bChoice = bNow;

    }
  }

}



function mouseClicked(){

  if(mouseX > sliderSide+10 && mouseX < 780){
    if(mouseY > 110 && mouseY < height-110){
      push();
        fill(rChoice, gChoice, bChoice);
        noStroke();
        ellipse(mouseX,mouseY,10,10);
      pop();
    }
  }
}

function mouseDragged() {

  if(mouseX > sliderSide+5 && mouseX < 780){
    if(mouseY > 110 && mouseY < height-110){
      push();
        strokeWeight(g);
        if (key == '1') {
          strokeWeight(g-5)
        }
        if (key == '2') {
          strokeWeight(g)
        }
        if (key == '3') {
          strokeWeight(g+10)
        }
        if (key == '4') {
          strokeWeight(g+50)
        }
        if (key == '5') {
          paint();
        }
        if (key == '6') {
          circles();
        }
        stroke(rChoice, gChoice, bChoice);
        line(mouseX, mouseY, pmouseX, pmouseY);
      pop();
    }
  }
}


function keyTyped(){

  if(key ==='r'){
    push();
      stroke(0);
      fill(255);
      rect(sliderSide, 100, 680, height-200);
    pop();

    // if the eraser is "turned on" when you refresh your drawing pad, this will turn the color back to black. otherwise, it'll stay as it was!
    if(rChoice == 255 && gChoice == 255 && bChoice == 255){
      rChoice = 0;
      gChoice = 0;
      bChoice = 0;
    }
  }

  if(key ==='e'){
    rChoice = 255;
    gChoice = 255;
    bChoice = 255;
  }

  if(key ==='b'){
    rChoice = 0;
    gChoice = 0;
    bChoice = 0;
  }

}

function getSortedPoints(pRef) {
	return points.filter(function(p){
		return p.strokeNumber == pRef.strokeNumber;
	}).sort(function(p1,p2){
		return pRef.sqDistance(p1) > pRef.sqDistance(p2) ? 1 : -1;
	})
}

function mousePressed() {
	painting = true;
	strokeNumber++;
}
function mouseReleased() {
	painting = false;
}

function paint() {

	if(painting){
		var p1 = new Point(mouseX,mouseY,strokeNumber);
		points.push(p1);
		console.log('new point',p1);

		getSortedPoints(p1).slice(0, numClosePoints).map(function(p2,i){
			var alpha = map(i,0,numClosePoints, 200,0);
			stroke(50, 120, 170,alpha);
			line(p1.x,p1.y,p2.x,p2.y);
		});
	}
}
class Point {
	constructor(x,y,strokeNumber){
		this.x=x;
		this.y=y;
		this.strokeNumber=strokeNumber;
	}
	sqDistance(p) {
		return pow(this.x-p.x,2)+pow(this.y-p.y,2);
	}
	draw(){
			ellipse(this.x,this.y, 5, 5);
	}
}

function circles() {
  angle = (angle + 3) % 360;
  translate(mouseX, mouseY);
  rotate(radians(angle));
  stroke(rChoice, gChoice, bChoice);
  strokeWeight(1);
  noFill();
  ellipse(100, 0, 50, 200);
}
