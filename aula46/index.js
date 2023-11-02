function mostraHora() {
    return new Date().toLocaleTimeString("pt-br");
}

function intervalFunc() {
    console.log(mostraHora());
}

const timer = setInterval(() => intervalFunc(), 1000);

setTimeout(() => clearInterval(timer), 5000);