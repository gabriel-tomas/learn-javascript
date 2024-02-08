const text = require('./base');

const regExp1 = /João|Gabriel/gi;

/* console.log(text.match(regExp1));
console.log(text.replace(/(João|Gabriel)/gi, '"""$1"""')); */
console.log(text.replace(/João|Gabriel/gi, function (input) {
  return input.toUpperCase();
}));
