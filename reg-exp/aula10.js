// Encontra todas as palavras + pontuações
const allWordsPunctuationRegex = /(\w+|([À-ú]+)|([\u0021-\u002F]+))/gmi;
// Encontra todas as palavras
const allWordsRegex = /([\wÀ-ú]+)/gmi;

// Não números
const notNumbersRegex = /\D/gm;

// Valida IP
const ipRegex = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;

// Valida o formato padrão de CPF (000.000.000-00) (ele não valida o CPF)
const cpfRegex = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida telefones
const telRegex = /^((\(\d{2}\))\s*)?(9\s*)?(\d{4}-\d{4})$/g;

// Validar senhas fortes
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%\]\)]).{8,}$/;

// Validar emails (válida várias linhas)
const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
// valida só uma unica linha, a primeira linha (essa primeira linha não pode ter espaços antes nem depois, só o email):
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g