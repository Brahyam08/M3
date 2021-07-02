class Distancia {
    millasAmetros(millas) {
        return millas * 1609.34;
    }

    millasAkilometros(millas) {
        return millas * 1.60934;
    }
}

let distacia = new Distancia();

console.log(distacia.millasAmetros(345));
console.log(distancia.millasAkilometros(2135));