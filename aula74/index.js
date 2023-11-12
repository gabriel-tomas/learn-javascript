function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa("Gabriel", "Gomes");
const pessoa2 = new Pessoa("Maria", "Gomes");

console.dir(pessoa1.nomeCompleto());