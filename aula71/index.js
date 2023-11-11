function Produto(nome, preco, estoque) {
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    });
    Object.defineProperties(this,)
    
}

const p1 = new Produto("Calça", 23, 3);
console.log(Object.keys(p1));