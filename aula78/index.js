// Superclass / Classe mãe
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        console.log("Não foi possível sacar");
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    if(valor <= 0) return;
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
};

/* const c1 = new Conta("001", "corrente", 120.34);
c1.depositar(150);
c1.sacar(270.34); */

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

Object.setPrototypeOf(ContaCorrente.prototype, Conta.prototype);
ContaCorrente.prototype.sacar = function (valor) {
    if((this.saldo + this.limite) < valor) {
        console.log("Não foi possível sacar");
        console.log("Sem saldo e limite suficiente")
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cc1 = new ContaCorrente("001", "Conta corrente", 50, 100);
cc1.depositar(200);
cc1.sacar(349.23);

function ContaPoupança(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

Object.setPrototypeOf(ContaPoupança.prototype, Conta.prototype);

const cp1 = new ContaPoupança("001", "Conta Poupança", 120.23, 100);
cp1.sacar(100);
cp1.sacar(20.23);
cp1.sacar(20.23);