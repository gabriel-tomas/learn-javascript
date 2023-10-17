function mainScope() {
    const form = document.querySelector("#form");
    const pessoas = [];

    function adicionarParagrafo(nome, sobrenome, peso, altura) {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML += `<p>Nome: ${nome}, Sobrenome: ${sobrenome}, Peso: ${peso}, Altura: ${altura}</p>`;
    }

    function adicionarPessoasArray(nome, sobrenome, peso, altura) {
        pessoas.push({nome, sobrenome, peso, altura});
        console.log(pessoas);
    }

    function pegarCamposForm() {
        const nome = form.querySelector("#nome");
        const sobrenome = form.querySelector("#sobrenome");
        const peso = form.querySelector("#peso");
        const altura = form.querySelector("#altura");

        adicionarPessoasArray(nome.value, sobrenome.value, peso.value, altura.value);
        adicionarParagrafo(nome.value, sobrenome.value, peso.value, altura.value);
    }

    function enviarForm(event) {
        event.preventDefault();
        pegarCamposForm();
    }

    form.addEventListener("submit", enviarForm)
}

mainScope();