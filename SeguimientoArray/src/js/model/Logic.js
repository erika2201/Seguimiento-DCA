  
class Logic {
    
    constructor(app) {
        this.app = app;
        
        this.circleArray = [];
        this.square = [];

        this.screen = 0;    //to use with switch
        this.countNumb = 0;
        this.size = 1;

        this.error = false;
        this.drawElli = false;

        this.position = [];
        this.position[0] = 10;
        this.position[1] = 80;
        this.position[2] = 150;
        this.position[3] = 220;
        this.position[4] = 290;
        this.position[5] = 360;
        this.position[6] = 430;
        this.position[7] = 500;
        this.position[8] = 570;
        this.position[9] = 640;

    }

    draw() {
        //FIRST SCREEN
        switch (this.screen) {
            case 0:
                rectMode(CENTER);
                noStroke();
                rect(300, 350, 75, 30);         //Number
                rect(240, 350, 30, 30, 5);      //-
                rect(360, 350, 30, 30, 5);      //+
                rect(300, 390, 150, 30 , 5);    //Continue
               
                textSize(18);
                text(this.countNumb, 293, 358);
                text("Continue", 260, 397);
                text("+", 355, 357);
                text("-", 237, 357);

                textSize(20);
                if (this.error) {
                    text("ERROR, please try with other number", 170, 250);
                }
                break;
       
        //SECOND SCREEN
            case 1:
                rectMode(app.CENTER);
                noStroke();
                rect(80, 475, 125, 50, 10);
                rect(220, 475, 125, 50, 10);
                rect(360, 475, 125, 50, 10);
                rect(500, 475, 125, 50, 10);
                text("Add", 70, 480);
                text("Delete", 200, 480);
                text("Magnify", 340, 480);
                text("Circles", 480, 480);
                
                for (let i = 0; i < this.square.length; i++) {
                    this.square[i].drawSquare((70 * i) + 70, 50 * this.size);
                    this.square[i].moveSquare();
                }

                if (this.drawElli) {
                    for (let i = 0; i < this.circleArray.length; i++) {
                        this.circleArray[i].drawCircle((70 * i) + 70, 50 * this.size);
                        this.circleArray[i].moveCircle();
                    }
                }
            break;   
        }
    }
    
    mouse() {
        switch (this.screen) {
            case 0:
                if (mouseX >= 225 && mouseX <= 255 && 
                    mouseY >= 335 && mouseY <= 365 && 
                    this.counter < 10) {
                    this.countNumb += 1;
                }
                if (mouseX >= 345 && mouseX <= 375 &&
                    mouseY >= 335 && mouseY <= 365 && 
                    this.counter > 0) {
                    this.countNumb -= 1;
                }
                if (mouseX >= 225 && mouseX <= 375 && 
                    mouseY >= 375 && mouseY <= 404 && 
                    this.countNumb > 0 && this.countNumb <= 10) {
                    this.screen = 1;
                    for (let i = 0; i < this.countNumb; i++) {
                        this.square.push(new Square(this.position[this.pos], 100, this.countNum, this.size))
                        console.log(this.countNum);
                    }
                }
                if (mouseX >= 225 && mouseX <= 375 &&
                    mouseY >= 375 && mouseY <= 405 && 
                    this.countNumb == 0) {
                    this.error = true;
                }
                break;
            case 1: 
            }
    }
}