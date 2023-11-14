function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(desconto) {
    console.log(`O produto ${this.nome} com o preço de R$${this.preco} vai ter um desconto de ${desconto * 100}%`);
    return (this.preco - (this.preco * desconto)).toFixed(2);
};

const produto1 = new Produto("Camisa", 23.29);

const produto2 = {
    nome: "Calça",
    preco: 45.23
}

Object.setPrototypeOf(produto2, Produto.prototype);


const produto3 = Object.create(Produto.prototype, {
    nome: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: "Bolsa"
    },
    preco: {
        value: 1203.23
    }
});


console.log(produto3.desconto(0.43));
