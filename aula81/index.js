const _velocidade = Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(newVelocidade) {
        if(typeof newVelocidade !== "number") return;
        if(newVelocidade >= 30 && newVelocidade <= 250) {
            this[_velocidade] = newVelocidade;
        }
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] > 100) return "+100";
        this[_velocidade]++;
        return this[_velocidade];
    }

    freiar() {if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
        return this[_velocidade];
    }
}

const carro1 = new Carro("Mustang")
carro1.velocidade = 30;
console.log(carro1.velocidade);

