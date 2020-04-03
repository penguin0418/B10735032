function setup() {
 createCanvas(600,600);
 background(0);
}

function draw() {

 var cx = map(mouseX,0,width,0,255);
 var cy = map(mouseY,0,height,0,255);
 var nsize = width/8+cos(mouseY*PI/180)*width/16;

 //互動
    fill(cx,cy,200,100);
    square(mouseX,mouseY,nsize);
    noStroke();
}
