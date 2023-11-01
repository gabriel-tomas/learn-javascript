function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let number = randomNumber(1, 50);

do {
    number = randomNumber(1, 50);
    console.log(number);
} while (number !== 50);