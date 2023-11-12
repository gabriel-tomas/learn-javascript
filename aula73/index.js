const produto = {nome: "Relógio", preco: 345.29};
const outraCoisa = {nome: produto.nome, preco: produto.preco};

outraCoisa.nome = "Camisa";
outraCoisa.preco = 23.29;

console.log(Object.entries(produto));

for(let [key, value] of Object.entries(produto)) {
    console.log(key, value);
}