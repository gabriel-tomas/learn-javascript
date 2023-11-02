function somar(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        throw("Os valores precisam ser números");
    }

    return num1 + num2;
}
try {
    console.log(somar(23, "23"));
} catch(error) {
    console.log(error);
}