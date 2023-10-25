const pessoa = {
    nome: "Gabriel",
    sobrenome: "Gomes",
    idade: 19,
    endereco: {
        rua: "Rua...",
        numero: "2"
    }
}

const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero);
console.log(endereco);