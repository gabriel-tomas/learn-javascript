function criaPessoa(nome, sobrenome) {
    const methodsProto = {
        falar() {
            console.log(`${this.nome} está falando`);
        },
        comer() {
            console.log(`${this.nome} está comendo`);
        }
    }
    const obj = Object.create(methodsProto, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
    return obj;
}

const p1 = criaPessoa("Gabriel", "Tomás");
p1.comer();
