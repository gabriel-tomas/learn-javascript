// arguments
function funcao() {
    let total = 0;

    for(let num of arguments){
        total += num;
    }

    console.log(total);
}

// mais parâmetros do que argumentos
function funcao1(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

// parâmetro com valor padrão
function soma(a = 0, b = 0) {
    console.log(a + b);
}

// pular parâmetro
function soma1(a, b = 2, c = 4) {
    console.log(a + b + c);
}

// desestruturação para pegar variáveis
function getPessoa([nome, idade, altura]) {
    console.log(nome, idade, altura);
}

// pegar o resto dos argumentos
function conta(operador, acumulador = 0, ...numeros) {
    if(operador === "+") {
        for(num of numeros) {
            acumulador += num;
        }
    } else if(operador === "-") {
        for(num of numeros) {
            acumulador -= num;
        }
    }

    return acumulador;
}

const func2 = (...args) => {
    console.log(args);
};

func2(1, 2, 3, 4, 5, 6);