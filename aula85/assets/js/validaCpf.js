class ValidarCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, "cpfLimpo", {
            enumerable: true,
            get: function() {
                return cpfEnviado.replace(/\D+/g, "");
            }
        })
    }

    valida() {
        if(typeof this.cpfLimpo === "undefined") return false;
        if(this.cpfLimpo.length !== 11) return false;

        const cpfArrayParcial = Array.from(this.cpfLimpo).slice(0, -2);

        cpfArrayParcial.push(ValidarCpf.createDigit(cpfArrayParcial));
        cpfArrayParcial.push(ValidarCpf.createDigit(cpfArrayParcial));

        const novoCpf = cpfArrayParcial.join("");

        return novoCpf === this.cpfLimpo;
    }

    static * count(cpfLenght) {
        let counter = Number(cpfLenght);
        while(true) {
            yield counter;
            counter--;
        }
    };

    static createDigit(parcialCpf) {
        const cpfNumsMultArray = ValidarCpf.multArray(parcialCpf);
        const totalMult1 = ValidarCpf.totalOfMult(cpfNumsMultArray);
        return String(ValidarCpf.mathExpressionDigit(totalMult1));
    }

    static multArray(array) {
        const counter = ValidarCpf.count(array.length + 1);
        return array.map((value) => Number(value) * counter.next().value);
    }

    static totalOfMult(array) {
        return array.reduce((ac, value) => {
            return ac += value;
        }, 0);
    }

    static mathExpressionDigit(totalMult) {
        return (11 - (totalMult % 11) > 9)? 0 : 11 - (totalMult % 11);
    }
}

const cpf1 = new ValidarCpf("705.484.450-52").valida();
console.log(cpf1);