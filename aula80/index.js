const pessoas = [
    {id: 3, nome: "Gabriel"},
    {id: 2, nome: "Maria"},
    {id: 1, nome: "Luiz"},
];

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for(const pessoa of novasPessoas.values()) {
    console.log(pessoa);
}

novasPessoas.delete(2);

console.log(novasPessoas);

