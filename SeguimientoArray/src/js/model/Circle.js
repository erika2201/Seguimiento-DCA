class Circle extends Figure {
   
    constructor(x, y, number, tam) {
      super(x, y, number, tam);
      
        this.speed = random(1, 3);
        this.value = int(random(1, 10));
    }


    drawFigure(posY, tam) {
        ellipse(this.x, posY, tam, tam);
        text(this.value, this.x, posY);
    }


    moveCircle() {
        posX += this.speed;
        if (this.x > 450 || this.x < 10) { 
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