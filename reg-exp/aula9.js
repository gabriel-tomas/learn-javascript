const lookahead = require('./lookahead');

/* console.log(lookahead.match(regex)); */
/* console.log(lookahead.match(/.+(?=[^in]active)/gim)); */
/* console.log(lookahead.match(/^(?!.+[^in]active).+$/gim)); */

console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));
