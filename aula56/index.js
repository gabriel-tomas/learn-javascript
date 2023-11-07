function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`;
        },
        get calcularIMC() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        set mudarNome(novoNome) {
            novoNome = novoNome.split(" ");
            const [nome, sobrenome] = [novoNome.shift(), novoNome.join(" ")];
            [this.nome, this.sobrenome] = [nome, sobrenome];
        },
        set mostrarContent(content) {
            console.log(content);
        }
    }
}

const pessoa1 = criaPessoa("Gabriel", "Tomás", 1.75, 69);
pessoa1.mudarNome = "Gabriel Gomes Tomás";
pessoa1.mostrarContent = pessoa1.nomeCompleto;