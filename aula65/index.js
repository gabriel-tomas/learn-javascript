const numeros = [5, 50, 32, 33, 40, 201, 20, 4, 320, 23, 82, 23, 1, 2];

const newArrayFilter = numeros.filter(valor => valor > 10);


const pessoas = [
    {nome: "Gabriel", idade: 19},
    {nome: "Maria", idade: 52},
    {nome: "Caio", idade: 23},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 44},
    {nome: "Luiz", idade: 67}
];

const pessoas5letras = pessoas.filter(value => value.nome.length >= 5
);

const pessoas50anos = pessoas.filter(value => value.idade > 50);

const pessoasTerminaA = pessoas.filter(value => value.nome.endsWith("a"));

console.log(pessoasTerminaA);