const divisivel = (num) => {
    let valueToR = "";

    if (typeof num === "number") {
        if (num % 3 === 0) valueToR += "Fizz";
        if (num % 5 === 0) valueToR += "Buzz";
    }

    return valueToR || num;
}

console.log("a", divisivel("a"));

for (let i = 0; i <= 100; i++) {
    console.log(i, divisivel(i));
}
