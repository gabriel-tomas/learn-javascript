function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min) * 1000;
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg === "number") {
                reject("Precisa ser número");
            }
            resolve(msg);
        }, tempo);
    })
}

esperaAi(2, randomNum(1, 3))
    .then((resposta) => {
        console.log(resposta);
        return esperaAi(3, randomNum(1, 3));
    }).then((resposta) => {
        return resposta + " cai para o parâmetro do outro then";
    }).then((resposta) => {
        console.log(resposta);
    }).catch((msg) => {
        console.log(msg);
    });
