class Cifras {
    constructor(numero) {
        this.numero = parseInt(numero)
    }
    esPar() {
        return this.numero % 2 !== 0 ? false : true
    }
    sumaDigitos() {
        let sum = 0
        let num = this.numero.toString()

        for (let i = 0; i < num.toString.length; i++) {
            suma += parseInt(num.substring(i, i + 1))
        }
        return suma
    }
}

cifra = new Cifras('28732')

console.log(Cifra.esPar())
console.log(cifra.sumaDigitos())