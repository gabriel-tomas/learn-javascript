const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener("load", e => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        });
    })
}

document.addEventListener("click", e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === "a") {
        e.preventDefault();
        console.log(tag);
        carregaPagina(el);
    };
})

async function carregaPagina(el) {
    const href = el.getAttribute("href");
    try {
        const result = await request({method: "GET", url: href});
        inserirPagina(result);
    } catch(e) {
        console.log(e);
    }
}

function inserirPagina(conteudoHTML) {
    const resultado = document.querySelector(".resultado");

    resultado.innerHTML = conteudoHTML;
}