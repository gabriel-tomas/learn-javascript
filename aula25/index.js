const numero = 6;

if("oia".indexOf("a") != -1) {
    console.log("tem letra A");
}

if(numero >= 0 && numero <= 5) {
    console.log("Sim, o número está entre 0 e 5");
} else if(numero >= 6 && numero <= 8) {
    console.log("Sim, o número está entre 6 e 8");
} else if(numero >= 9 && numero <= 11) {
    console.log("Sim, o número está entre 9 e 11");
} else {
    console.log("O número NÃO esta entra 0 e 11");
}