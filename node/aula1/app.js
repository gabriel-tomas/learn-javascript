const modulo1 = require("./mod1");
const axios = require("axios");

getPessoas().then(res => console.log(res));
console.log(modulo1);

async function getPessoas() {
    try {
        const pessoas = await axios("https://dummyjson.com/users");
        return pessoas.data;
    } catch (error) {
        throw(error);
    }
}