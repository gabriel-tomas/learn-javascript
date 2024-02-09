const htmlTxt = require('./htmlTxtContent2');

const regex = /(<(\w+?)[\s\S]*?>)([\s\S]*?)(<\/\2>)|<w+?\/>/gi;

/* console.log(htmlTxt); */

console.log(htmlTxt.match(regex));
let allTags = htmlTxt.replace(regex, '$1$3$4');
console.log(allTags);
