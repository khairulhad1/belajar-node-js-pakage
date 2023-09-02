const cobaAsyc = require('./async.js');

const user1 = cobaAsyc.getUsr(1, (hasil) => {
  console.log(hasil);
});

const user2 = cobaAsyc.getUsr(10, (hasil) => {
  console.log(hasil);
});

console.log(cobaAsyc.cetakH, user1, user2);