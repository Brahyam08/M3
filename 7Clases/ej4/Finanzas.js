class Finanzas {
    dolaresToEuros(dolares) {
        return dolares * 0.84;
    }

    eurosToDolares(euros) {
        return euros * 1.19;
    }
}

let dinero = new Finanzas();

console.log(dinero.dolaresToEuros(100), dinero.eurosToDolares(100));