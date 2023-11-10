const numeros = [5, 50, 32, 33, 40, 201, 20, 4, 320, 23, 82, 23, 1, 2];

const numerosDobrados = numeros.map(valor => valor * 2);




















const pessoas = [
    {nome: "Gabriel", idade: 19},
    {nome: "Maria", idade: 52},
    {nome: "Caio", idade: 23},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 44},
    {nome: "Luiz", idade: 67}
];

const soNomes = pessoas.map(valor => valor.nome);

const semNomes = pessoas.map(valor => {
    const obj = {...valor}
    delete obj.nome;
    return obj;
});

const comID = pessoas.map(valor => {
    const obj = {...valor};
    obj.id = Math.random().toFixed(2);
    return obj;
});

console.log(comID);