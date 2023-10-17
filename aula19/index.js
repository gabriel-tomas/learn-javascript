const a = {
    nome: "Gabriel",
    sobrenome: "Gomes"
}

const b = {...a};

a.nome = "Tomás";
console.log(a, b)