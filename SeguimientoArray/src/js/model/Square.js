class Square extends Figure {
   
    constructor(x, y, number, tam) {
      super(x, y, number, tam);
      
        this.speed = random(1, 3);
        this.value = int(random(1, 10));
    }


    drawSquare(posY, tam) {
       rect(this.x, posY, tam, tam);
       text(this.value, this.x, posY);
    }


    moveSquare() {
        this.x += this.speed;
        if (this.x > 590 || this.x < 10) { 
            this.speed = -this.speed; //change direction
        }
    }


    getValue() {
        return this.value;
    }


    setTam(tam) {
        this.tam = tam;
    }
}