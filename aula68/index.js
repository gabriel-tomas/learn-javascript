const numeros = [5, 50, 32, 33, 40, 201, 20, 4, 320, 23, 82, 23, 1, 2];

const reduzidoParesDobro = numeros
    .filter(valor => valor % 2 === 0? valor : false)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor);

console.log(reduzidoParesDobro);