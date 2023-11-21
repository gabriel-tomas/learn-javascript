function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min) * 1000;
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject(false);
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}
/* 
esperaAi("Fase 1", randomNum(0, 3))
    .then(res => {
        console.log(res);
        return esperaAi("Fase 2", randomNum(0, 3));
    })
    .then(res => {
        console.log(res);
        return esperaAi("Fase 3", randomNum(0, 3));
    })
    .then(res => {
        console.log(res);
    })
    .catch(erro => {
        console.log(erro);
    }) */

async function executa() {
    try {
        const fase1 = await esperaAi("Fase 1", randomNum(0, 3));
        console.log(fase1);
        const fase2 = await esperaAi(2, randomNum(0, 3));
        console.log(fase2);
        const fase3 = await esperaAi("Fase 3", randomNum(0, 3));
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
    console.log("Eu vou se executado por último por que to dentro da função Async");
}

executa();
console.log("Eu vou ser executado primeiro por que não to dentro da função Async");