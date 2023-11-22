/* fetch("pessoas.json")
    .then(response => {
        return response.json();
    })
    .then(content => {
        carregaElPagina(content);
        console.log(content);
    }) */

axios("pessoas.json")
    .then(response => {
        carregaElPagina(response.data);
    })

function carregaElPagina(arrayOfObj) {
    const pessoas = document.querySelector(".pessoas");
    
    for(let pessoa of arrayOfObj) {
        pessoas.appendChild(elementCreator("p", `Nome: ${pessoa.nome}`));
        pessoas.appendChild(elementCreator("p", `Idade: ${pessoa.idade}`));
        pessoas.appendChild(elementCreator("p", `Estado: ${pessoa.estado}`));
    }

    function elementCreator(el, text) {
        el = document.createElement(el);
        el.innerText = text;

        if(text.indexOf("Estado") !== -1) {
            el.classList.add("gap-bottom0");
        }

        return el;
    }
}