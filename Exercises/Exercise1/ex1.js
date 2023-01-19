let x = 40;
let y = 40;
let r = 10;

function setup() {
    createCanvas(800,600);
}

function draw() {
 if (r < 50) {
   if(mouseIsPressed) {
    r++;
   }
 }
circle(x,y,r);
console.log(r);
}

