const a1 = [2, 3, 4, 23, 0, 21, 15, 13, 16, 8];
let total = 0;

a1.forEach(function(valor, indice, array) {
    total += valor;
})

console.log(total);