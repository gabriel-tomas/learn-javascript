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


function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject("Página em cache");
    } else {
        return esperaAi("Baixei a página", 3000);
    }
}

baixaPagina()
    .then(resposta => {
        console.log(resposta);
    }).catch(e => {
        console.log("ERRO:", e);
    });




/* const promises = [
    esperaAi("Promise 1", 3000),
    esperaAi("Promise 2", 500),
    esperaAi("Promise 3", 1000),
    //esperaAi(2, 1000),
] */

/* Promise.race(promises)
    .then(valor => {
        console.log(valor);
    }).catch(erro => {
        console.log(erro);
    }) */