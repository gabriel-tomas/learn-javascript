const text = require('./base');
const files = require('./files');

/* const regExp1 = /Jo+ão+/gi;
console.log(text.match(regExp1)); */

const regJpg = /\.(jpe{0,1}g)/gi;

for (const file of files) {
  console.log(file, file.match(regJpg));
}