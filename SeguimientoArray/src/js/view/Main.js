let controller;

function setup(){
    createCanvas(600,650);
    controller= new Controller(this);
}


function draw(){
    background(140, 166, 255);
    controller.draw();
}


function mouseClicked(){
    controller.mouse();
}


function keyPressed(){
    controller.key();
}

