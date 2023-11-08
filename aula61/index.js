function* geradora1() {
    // Código...
    yield "Valor 1";
    // Código...
    yield "Valor 2";
    // Código...
    yield "Valor 3";
}

function* geradora2() {
    let i = 0;
    
    while(true) {
        yield i;
        i++;
        console.log("aa", i);
    }
}

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for(let value of g4) {
    console.log(value);
}