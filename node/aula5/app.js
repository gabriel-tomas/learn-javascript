const path = require("path");
const escrever = require("./modules/escrever");
const ler = require("./modules/ler");
const { json } = require("stream/consumers");
const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");

const pessoas = [
    {
        nome: "Gabriel",
        sobrenome: "Tomás"
    },
    {
        nome: "Maria",
        sobrenome: "Gomes"
    },
    {
        nome: "Luiz",
        sobrenome: "Miranda"
    }
]

const jsonPessoas = JSON.stringify(pessoas, undefined, 2);

escreverArquivo(caminhoArquivo, jsonPessoas);
leArquivo(caminhoArquivo, jsonPessoas);

function escreverArquivo(caminho, dados) {
    escrever(caminho, dados);
}

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    console.log(`Dados do ${caminho.slice( caminho.lastIndexOf("\\") + 1)}\n ${dados}`);
}


