const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

while (i < numeros.length) {
    let num = numeros[i];

    if(num === 2) {
        console.log(`número ${num} encontrado, pulando para o próximo laço`);
        i++;
        continue;
    }

    if(num === 7) {
        console.log(`número ${num} encontrado, código parado.`);
        break;
    }

    console.log(num);
    i++;
}