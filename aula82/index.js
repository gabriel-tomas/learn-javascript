class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        };
        console.log(`${this.nome} ligado`);
        this.ligado = true;
    }
    desligar() {
        if(!(this.ligado)) {
            console.log(`${this.nome} já está desligado`);
            return;
        }
        console.log(`${this.nome} desligado`);
        this.ligado = false;
    }
}

const dispositivo1 = new DispositivoEletronico("Celular");

class Celular extends DispositivoEletronico {
    constructor(nome, memoria, tamanho) {
        super(nome);
        this.memoria = memoria;
        this.tamanho = tamanho;
    }

    ligar() {
        console.log("Você alterou o metodo ligar");
    }
}

const celular1 = new Celular("Samsung", 178, 5);
celular1.ligar();
console.log(celular1);