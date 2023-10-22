function mainScope() {
    const form = document.querySelector(".form");

    function msgErro(tipo) {
        const p = document.createElement("p");
        p.classList.add("value-incorrect");
        if(tipo == "peso") {
            p.innerHTML = "Peso inválido";
        } else if(tipo === "altura") {
            p.innerHTML = "Altura inválida";
        } else if(tipo === "all") {
            p.innerHTML = "Valores inválidos";
        }
        return p;
    }

    function validarValores(peso, altura) {
        if(isNaN(peso) && isNaN(altura) || peso === 0 && altura === 0) {
            return "all";
        } else if(isNaN(peso) || peso === 0) {
            return "peso";
        } else if(isNaN(altura) || altura === 0) {
            return "altura";
        }
        return true;
    }
    
    function calcularIMC(peso, altura) {
        return peso / (altura ** 2);
    }

    function filtroIMCs(resultado) {
        let mensagem;
        if(resultado < 18.5) {
            mensagem = "Abaixo do peso";
        } else if(resultado >= 18.5 && resultado < 25) {
            mensagem = "Peso normal";
        } else if(resultado >= 25 && resultado < 30) {
            mensagem = "Sobrepeso";
        } else if(resultado >= 30 && resultado < 35) {
            mensagem = "Obesidade grau 1";
        } else if(resultado >= 35 && resultado < 40) {
            mensagem = "Obesidade grau 2";
        } else if(resultado >= 40) {
            mensagem = "Obesidade grau 3";
        }
        return mensagem;
    }

    function mostrarMsg(element) {
        const resultados = document.querySelector(".resultados");

        resultados.innerHTML = "";
        resultados.appendChild(element);
    }

    function pegarValores() {
        const pesoCampo = document.querySelector("#peso-campo");
        const alturaCampo = document.querySelector("#altura-campo");

        let peso = Number(pesoCampo.value);
        let altura = Number(alturaCampo.value);
        return [peso, altura];
    }

    function paragrafoIMC(resultado, mensagem) {
        const p = document.createElement("p");
        p.innerHTML = `Seu IMC é <span>${resultado.toFixed(2)}</span> (${mensagem})`;
        p.classList.add("value-correct");
        return p;
    }
    
    function doIMC(event) {
        event.preventDefault();
        let [peso, altura] = pegarValores();
        const validacao = validarValores(peso, altura);
        if(typeof validacao !== "string") {
            const resultado = calcularIMC(peso, altura);
            const mensagem = filtroIMCs(resultado);
            mostrarMsg(paragrafoIMC(resultado, mensagem));
        } else {
            console.log(validacao);
            mostrarMsg(msgErro(validacao));
        }
    }

    form.addEventListener("submit", doIMC);
}

mainScope();