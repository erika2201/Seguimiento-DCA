  
class Logic {
    
    constructor() {
        this.app = app;
        
        this.circleArray = [];
        this.square = [];

        this.screen = 0;    //to use with switch
        this.countNumb = 0;
        this.error = false;

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

            break;
    }   
}