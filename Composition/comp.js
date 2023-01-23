//Name: Val Cinbat
//Date: 1/19/2023


let x = 0; //Declare variable x
let y = 0; //Declare variable y

function setup() {          //Setting up the canvas dimensions and the background color
  createCanvas(1500, 900);
  background(255,215,0);
}

function draw() {
  fill(100,149,237);        //Setting the color inside the ellipse to be light blue
  strokeWeight(5);          //Setting the thickness of the ellipse
  stroke(0, 0, 139);        //Setting the color of the stroke weight
  ellipse(x, y, 50, 50);    //Setting the ellipse's dimensions
               
  if (x > width) {          //If statement that checks whether the x value is greater than the canvas width
    x = 0;                  //If so, the ellipse starts back at 0 x-coordinate
  }else{
    x += 10;                //Else continue the draw function by incrementing the x value by 10
  }
  if (y > height) {         //If statement that checks whether the y value is greater than the canvas height
    y = 0;                  //If so, the ellipse starts back at 0 y-coordinate
  }else{
    y += 10;                //Else continue the draw function by incrementing the y value by 10
  }
}