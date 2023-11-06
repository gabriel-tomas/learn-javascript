function randomTime(max = 1500, min = 200) {
    return Math.round(Math.random() * (max - min) + min);
}

function f1(callback) {
    setTimeout(() => {
        console.log("f1");
        if(callback) callback();
    }, randomTime());
}

function f2(callback) {
    setTimeout(() => {
        console.log("f2");
        if(callback) callback();
    }, randomTime());
}

function f3(callback) {
    setTimeout(() => {
        console.log("f3");
        if(callback) callback();
    }, randomTime());
}

f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack);
};

function f2CallBack() {
    f3(f3CallBack);
}

function f3CallBack() {
    console.log("Todas funções executadas");
}