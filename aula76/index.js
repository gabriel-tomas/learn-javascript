//Produto → aumento, desconto —→ isso todos os produtos vão ter
//Camiseta = tamanho, caneca = cor, bolsa = material —-→ especificos para cada produto.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Esses dois mêtodos vão poder ser usados por todos produtos criados a partir da função construtora Produto
Produto.prototype.aumento = function(percentual) {
    return (this.preco * percentual / 100) + this.preco;
};
Produto.prototype.desconto = function(percentual) {
    return this.preco - (this.preco * percentual / 100);
};

// Criando o produto camiseta e especificando coisas de camiseta
function Camiseta(nome, preco, tamanho, pano = "Algodão") {
    Produto.call(this, nome, preco);
    this.tamanho = tamanho;
    this.pano = pano;
}

Camiseta.prototype.mudarTipoPano = function(novoTipo) {
    this.pano = novoTipo;
}
Camiseta.prototype.mudarTamanho = function(novoTamanho) {
    this.tamanho = novoTamanho;
}

Object.setPrototypeOf(Camiseta.prototype, Produto.prototype);

const camiseta = new Camiseta("Regata", 15.79, "P");
camiseta.mudarTamanho("G");
camiseta.mudarTipoPano("Malha");


// Criando um produto caneca
function Caneca(nome, preco, cor, estoque) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            typeof valor === "number"? estoque = valor : estoque = estoque;
        }
    })
}

Caneca.prototype.mudarCor = function(novaCor) {
    this.cor = novaCor;
}

Object.setPrototypeOf(Caneca.prototype, Produto.prototype);


const caneca = new Caneca("Xícara", 5.79, "branco", 13);
caneca.mudarCor("verde");
caneca.estoque = "103";
console.log(caneca);
