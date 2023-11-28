export default class GeradorSenha {
    constructor(quantity, num, upperCase, lowerCase, symbol) {
        if(quantity === 0) return false;
        this.quantity = Number(quantity);
        this.num = num;
        this.upperCase = upperCase;
        this.lowerCase = lowerCase;
        this.symbol = symbol;
    }
    // ordem = maiúscula, minúscula, números, simbolos
    gera() {
        if(this.quantity === 0) return false;

        let senha = "";

        for(let quant = 0; quant < this.quantity; quant++) {
            if(this.upperCase) {
                senha += GeradorSenha.randLetter();
            }
            if(this.lowerCase) {
                senha += GeradorSenha.randLetter(true);
            }
            if(this.num) {
                senha += GeradorSenha.randNum();
            }
            if(this.symbol) {
                senha += GeradorSenha.randSymbol();
            }
        }

        return senha.slice(0, this.quantity);
    }

    static randNum(max = 9, min = 0) {
        return Math.round(Math.random() * (max - min) + min);
    }

    static randLetter(lowerCase) {
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        if(lowerCase) letters = letters.map(value => value.toLowerCase());

        const randL = letters[GeradorSenha.randNum(letters.length - 1, 0)];
        
        return randL;
    }

    static randSymbol() {
        const symbols = ',.;~^[]{}!@#$%*()_+=-';
        const randSymbol = symbols[GeradorSenha.randNum(symbols.length - 1, 0)];

        return randSymbol;
    }
}