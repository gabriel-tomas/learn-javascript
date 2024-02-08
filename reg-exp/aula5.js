const alfabeto = require('./alfabeto');

/* const regex = /\w+/g; */
const regex = /\s+/g;
/* const regex = /[\u0021-\u002E]/g; */
console.log(alfabeto.match(regex));
