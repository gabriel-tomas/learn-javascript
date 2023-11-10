const numeros = [5, 50, 32, 33, 40, 201, 20, 4, 320, 23, 82, 23, 1, 2];

function somarArray(acumulador, valor, indice, array) {
    return acumulador + valor;
}
const total = numeros.reduce(somarArray, 0);

const numsPares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []);

const dobroValores = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);























const pessoas = [
    {nome: "Gabriel", idade: 19},
    {nome: "Maria", idade: 52},
    {nome: "Caio", idade: 23},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 44},
    {nome: "Luiz", idade: 67}
];

const pessoaVelha = pessoas.reduce((acumulador, valor) => {
    return acumulador.idade > valor.idade? acumulador : valor;
});

console.log(pessoaVelha);