class PessoaClass {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function PessoaFunc(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

PessoaFunc.prototype.comer = function() {
    console.log(`${this.nome} está comendo`);
}
PessoaFunc.prototype.andar = function() {
    console.log(`${this.nome} está andando`);
}
PessoaFunc.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}

const p1 = new PessoaClass("Gabriel", "Tomás");
const p2 = new PessoaFunc("Maria", "Silva");
console.log(p1);
console.log(p2);