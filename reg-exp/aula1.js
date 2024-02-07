const text = require('./base');

const regExp1 = /(maria|gabriel|joão) foi ontem e voltou antes de ontem/gi;

console.log(regExp1.exec(text));
