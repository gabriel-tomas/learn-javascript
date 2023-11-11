function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            typeof valor === "number"? estoque = valor : console.log("O valor deve ser { number }");
        }
    });
}

const p1 = new Produto("Calça", 23, 3);
console.log(a1.a);
p1.estoque = 4;
console.log(p1.estoque);

function criarNome(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

const a1 = criarNome("Gabriel");
a1.nome = "Tomás";
console.log(a1.nome);