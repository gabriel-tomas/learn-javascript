const nome = "Gabriel";
const sobrenome = "Tomás";
const idade = 19;

export default (x, y) => x + y;

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {nome, sobrenome, idade, Pessoa};