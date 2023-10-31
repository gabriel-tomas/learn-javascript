const frutas = ["Banana", "Maçã", "Pera", "Morango", "Laranja"];
const pessoas = {nome: "Gabriel", sobrenome: "Tomás", idade: 19};

for (let chaves in pessoas) {
    console.log(pessoas[chaves]);
}