const fs = require("fs").promises;
const path = require("path");

async function readdir(caminhoRaiz = path.resolve(__dirname)) {
    const files = await fs.readdir(caminhoRaiz);
    walkFiles(files, caminhoRaiz);
}

async function walkFiles(files, caminhoRaiz) {
    for(let file of files) {
        const stats = await fs.stat(path.resolve(caminhoRaiz, file));
        const fileFullPath = path.resolve(caminhoRaiz, file);
        
        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(fileFullPath.indexOf("node_modules") !== -1) continue;
        if(fileFullPath.indexOf(".git") !== -1) continue;
        if(!(fileFullPath.indexOf(".html") !== -1)) continue;

        console.log(fileFullPath);
    };
}

readdir(path.resolve(__dirname, "..", ".."));