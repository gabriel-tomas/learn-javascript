function Saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

function Soma(n1 = 0, n2 = 0) {
    const resultado = n1 + n2;
    return resultado;
}

const raiz = n => n ** (1/2);

console.log(raiz(9));