const {cpfs2} = require('./cpfsIps');

const regexCpf = /^(\d{3}\.){2}\d{3}-\d{2}$/gm;

const cpf1 = '254.224.877-45';

console.log(cpfs2.match(regexCpf));
