const htmlContent = require('./htmlTxtContent');

const regex = /<.+?>.*?<\/.+?>/gi;

console.log(htmlContent.match(regex));
