document.addEventListener("click", e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === "a") {
        e.preventDefault();
        carregaPagina(el);
    };
})

async function carregaPagina(el) {
    const href = el.getAttribute("href");
    try {
        const response = (await fetch(href)).text();
        const html = await response;
        inserirPagina(html);
    } catch(e) {
        console.log(e);
    }
}

function inserirPagina(conteudoHTML) {
    const resultado = document.querySelector(".resultado");

    resultado.innerHTML = conteudoHTML;
}
