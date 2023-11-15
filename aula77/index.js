// Com função normal
function validarCpf(cpf) {
    if(typeof cpf !== "string") return;

    const cpfOriginal = clearCpf(cpf, true);
    const cpfArray = clearCpf(cpf);
    cpfArray.push(createDigit(cpfArray));
    cpfArray.push(createDigit(cpfArray));

    function clearCpf(cpf, original) {
        const cpfLimpo = cpf.replace(/\D+/g, "");
        if(original) return cpfLimpo;
        return Array.from(cpfLimpo).slice(0, -2);
    }

    function createDigit(array) {
        const cpfNumsMultArray = multArray(array);
        const totalMult1 = totalOfMult(cpfNumsMultArray);
        return String(mathExpressionDigit(totalMult1));
    }

    function multArray(array) {
        const counter = count(cpfArray.length + 1);
        return array.map((value) => Number(value) * counter.next().value);
    }

    function totalOfMult(array) {
        return array.reduce((ac, value) => {
            return ac += value;
        }, 0);
    }

    function* count(cpfLenght) {
        let counter = Number(cpfLenght);
        while(true) {
            yield counter;
            counter--;
        }
    }

    function mathExpressionDigit(totalMult) {
        return (11 - (totalMult % 11) > 9)? 0 : 11 - (totalMult % 11);
    }

    return cpfArray.join("") === cpfOriginal;
}

// Com constructor function junto com prototype
function ValidaCpf(cpf) {
    Object.defineProperty(this, "cpfLimpo", {
        enumerable: true,
        configurable: false,
        get: function() {
            return cpf.replace(/\D+/g, "");
        }
    });
}

ValidaCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === "undefined") return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfArrayParcial = Array.from(this.cpfLimpo).slice(0, -2);
    cpfArrayParcial.push(this.createDigit(cpfArrayParcial));
    cpfArrayParcial.push(this.createDigit(cpfArrayParcial));

    return cpfArrayParcial.join("") === this.cpfLimpo;
}

ValidaCpf.prototype.createDigit = function(parcialCpf) {
    function create(parcialCpf) {
        const cpfNumsMultArray = multArray(parcialCpf);
        const totalMult1 = totalOfMult(cpfNumsMultArray);
        return String(mathExpressionDigit(totalMult1));
    }

    function multArray(array) {
        const counter = count(array.length + 1);
        return array.map((value) => Number(value) * counter.next().value);
    }

    function totalOfMult(array) {
        return array.reduce((ac, value) => {
            return ac += value;
        }, 0);
    }

    function* count(cpfLenght) {
        let counter = Number(cpfLenght);
        while(true) {
            yield counter;
            counter--;
        }
    }

    function mathExpressionDigit(totalMult) {
        return (11 - (totalMult % 11) > 9)? 0 : 11 - (totalMult % 11);
    }

    return create(parcialCpf);
}

ValidaCpf.prototype.isSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf1 = new ValidaCpf("705.484.450-52");
console.log(cpf1.valida());