function Pessoa(nome, sobrenome, idade) {
    this.nome = nome; // === pessoa1 === {}
    this.sobrenome = sobrenome;
    this.idade = idade;

    // return this === {nome: "Gabriel", sobrenome: "Tomás", idade: 19}
    Object.freeze(this);
}

// {} <- this -> this
const pessoa1 = new Pessoa("Gabriel", "Tomás", 19); // === {} === pessoa1
delete pessoa1.nome;
console.log(pessoa1);
