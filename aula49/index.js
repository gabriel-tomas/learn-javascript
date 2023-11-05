// Declaração de função clássica (Function hoisting)
function falaBomDia() {
    console.log("Bom dia");
}

// First-class objects
// Function expression
const falarOi = function() {
    console.log("oi");
}

// Arrow function
const soma = (n1, n2) => n1 + n2;

console.log(soma(2, 3));

// Dentro de um objeto
const obj = {
    falar() {
        console.log("Estou falando");
    }
}

obj.falar();