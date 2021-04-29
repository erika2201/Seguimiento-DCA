  
class Logic {
    
    constructor(app) {
        this.app = app;
        
        this.circleArray = [];
        this.square = [];

        this.screen = 0;    //to use with switch
        this.countNumb = 0;
        this.tam = 1;

        this.error = false;
        this.drawElli = false;

        this.position = [];
        this.position[0] = 10;
        this.position[1] = 60;
        this.position[2] = 110;
        this.position[3] = 160;
        this.position[4] = 210;
        this.position[5] = 260;
        this.position[6] = 310;
        this.position[7] = 360;
        this.position[8] = 410;
        this.position[9] = 460;

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
                rectMode(CENTER);
                noStroke();
                rect(80, 600, 125, 50, 10);     //Add
                rect(220, 600, 125, 50, 10);    //Delete
                rect(360, 600, 125, 50, 10);    //Magnify
                rect(500, 600, 125, 50, 10);    //Circle
                textSize(18);
                text("Add", 60, 605);
                text("Delete", 190, 605);
                text("Magnify", 330, 605);
                text("Circles", 470, 605);
                
                for (let i = 0; i < this.square.length; i++) {
                    this.square[i].drawSquare((50 * i) + 45, 40 * this.tam);
                    this.square[i].moveSquare();
                }

                if (this.drawElli) {
                    for (let i = 0; i < this.circleArray.length; i++) {
                        this.circleArray[i].drawCircle((50 * i) + 45, 40 * this.tam);
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
                    this.countNumb > 0) {
                    this.countNumb -= 1;
                }
                if (mouseX >= 345 && mouseX <= 375 &&
                    mouseY >= 335 && mouseY <= 365 && 
                    this.countNumb < 10) {
                    this.countNumb += 1;
                }
                if (mouseX >= 225 && mouseX <= 375 && 
                    mouseY >= 375 && mouseY <= 404 && 
                    this.countNumb > 0 && this.countNumb <= 10) {
                    this.screen = 1;
                    for (let i = 0; i < this.countNumb; i++) {
                        this.square.push(new Square(50, this.position[this.pos], this.countNumb, this.tam))
                        console.log(this.countNumb);
                    }
                }
                if (mouseX >= 225 && mouseX <= 375 &&
                    mouseY >= 375 && mouseY <= 405 && 
                    this.countNumb == 0) {
                    this.error = true;
                }
                break;

            case 1: 
             if (mouseX >= 18 && mouseX <= 142 && 
                 mouseY >= 590 && mouseY <= 610) {
                    console.log("Add");
                    if (this.square.length >= 0 && this.square.length < 10) {
                        this.square.push(new Square(50, this.position[this.pos], this.countNumb, this.tam));
                    }
                }

             if (mouseX >= 158 && mouseX <= 282 && 
                 mouseY >= 590 && mouseY <= 610) {
                    console.log("Delete");
                    if (this.square.length > 1) {
                        this.square.splice(0, 1);
                    }
                }

            if (mouseX >= 298 && mouseX <= 422 && 
                mouseY >= 590 && mouseY <= 610) {
                    console.log("Magnify");
                    this.square.forEach(element => {
                        this.tam = 2;});
                }

            if (mouseX >= 438 && mouseX <= 562 && 
                mouseY >= 590 && mouseY <= 610) {
                    console.log("Circle");
                    this.circleArray = this.square.map(function (x) {
                        return x = new Circle(50, 50 * x.pos, x.getValue, x.tam); })
                        this.drawElli = true;
                }
                 break;
            }
    }


     key() {
        if (keyCode === 78) {
            this.square.sort(function (a, b) {
                return a.getValue() - b.getValue();
            });

            this.circleArray.sort(function (a, b) {
                return a.getValue() - b.getValue();
            });
        }
    }

}