let x = 40;
let y = 40;
let xSpeed = 40;
let ySpeed = 40;

function setup() {
    createCanvas(800,600);
}

//Make it so circle cant grow over radius 50
function draw() {
    x = x + xSpeed;
    y+= ySpeed;
    //Draw circle at mouse location
    circle(x, y, 40);

if(mouseIsPressed) {
    xSpeed = -8;
}
}