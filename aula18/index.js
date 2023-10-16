const pessoa1 = {
    nome: "Gabriel",
    sobrenome: "Gomes",
    idade: 19,

    incrementaIdade() {
        this.idade++;
    },
    mostrarTodosDados() {
        console.log(`O nome é: ${this.nome}`);
        console.log(`O sobrenome é: ${this.sobrenome}`);
        console.log(`A idade é: ${this.idade}`);
    }
};

pessoa1.mostrarTodosDados();
pessoa1.incrementaIdade();
pessoa1.mostrarTodosDados();
