function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promessa...")
            resolve("Promessa resolvida");
        }, 2000);
    })
}

export default async function runPromise() {
    const valor = await promise();
    console.log(valor);
}
