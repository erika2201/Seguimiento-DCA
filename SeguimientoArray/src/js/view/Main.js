let controller;

function setup(){
    createCanvas(600,600);
    controller= new Controller(this);
}


function draw(){
    background(140, 166, 255);
    controller.draw();


}



