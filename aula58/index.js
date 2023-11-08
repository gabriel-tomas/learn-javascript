function Pessoa(nome, sobrenome) {
    const id = 12;

    this.nome = nome;
    this.sobrenome = sobrenome;

    const lowerTexts = nome => nome.toLowerCase(); 
    
    this.falar = function() {
        console.log(`${lowerTexts(nome)} está falando`);
        console.log(`ID: ${id}`);
    };
}

const pessoa1 = new Pessoa("Gabriel", "Tomás");
pessoa1.falar();