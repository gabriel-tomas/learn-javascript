import GeradorSenha from "./GeradorSenha.js";

function getInputsValues() {
    document.querySelector(".form-options").addEventListener("submit", e => {
        e.preventDefault();
        const quantity = document.querySelector("#quantity-caracters").value;
        const addNum = document.querySelector("#add-num").checked;
        const addUpperCase = document.querySelector("#add-upperCase").checked;
        const addLowerCase = document.querySelector("#add-lowerCase").checked;
        const addSymbols = document.querySelector("#add-symbols").checked;
        
        const geraSenha = new GeradorSenha(quantity, addNum, addUpperCase, addLowerCase, addSymbols);
        const senha = geraSenha.gera();
        addSenhaGerada(senha || "Nada selecionado");
    })
}

function addSenhaGerada(senha) {
    const senhaGerada = document.querySelector(".senha-gerada");
    senhaGerada.innerText = senha;
}

getInputsValues();