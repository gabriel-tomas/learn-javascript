function returnFuncao() {
    const nome = "Gabriel";
    return function() {
        return nome;
    };
}

const funcao = returnFuncao();
console.dir(funcao);
