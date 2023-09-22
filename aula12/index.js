let varA = "A";
let varB = "B";
let varC = "C";

const tempVarA = varA;

varA = varB;
varB = varC;
varC = lastVarA;

console.log(varA, varB, varC);