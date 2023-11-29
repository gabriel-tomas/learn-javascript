const nome = "Gabriel";
const sobrenome = "Tomás";

function falaNome() {
    console.log(nome, sobrenome);
}

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

module.exports = {
    nome, sobrenome, falaNome, Pessoa
}
