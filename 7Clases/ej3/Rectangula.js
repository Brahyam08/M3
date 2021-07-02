class Rectangulo {
    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    calculaArea() {
        return this.largo * this.ancho;
    }

    calculaPerimetro() {
        return (this.largo + this.ancho) * 2;
    }
}

let area = new Rectangulo(10, 20);

console.log(area.calculaArea(), area.calculaPerimetro());