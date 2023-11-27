import ValidaCpf from "./ValidaCpf.js";

export default class GeraCPF {
    geraNovoCpf() {
        let cpfSemDigito = Array.from(this.rand());
        let digito = ValidaCpf.createDigit(cpfSemDigito);
        cpfSemDigito.push(digito);
        digito = ValidaCpf.createDigit(cpfSemDigito);
        cpfSemDigito.push(digito);
        return this.formatado(cpfSemDigito.join(""));
    }

    formatado(cpf) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    }

    rand(min = 100000000, max = 999999999) {
        return String(Math.round(Math.random() * (max - min) + min));
    }
}
