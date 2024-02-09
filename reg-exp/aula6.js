const {cpfs, ips} = require('./cpfsIps');

const regexCpf = /(\d{3}\.){2}\d{3}-\d{2}/g;
const regexIp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;
/* console.log(cpfs.match(regexCpf)); */
console.log(ips.match(regexIp));

/* for (let i = 0; i <= 300; i++) {
  const ip = `${i}.${i}.${i}.${i}`
  console.log(ip, ip.match(regexIp));
}
 */