const getUsr = (id, cb) => {
    const time = id === 1? 3000 : 2000
    setTimeout(() => {
    const nama = id ===1 ? "khairul" : "hadi"
    cb({id,nama});
    },time);
}

// const user1 = getUsr(1, (hasil) => {
//   console.log(hasil);
// })

// const user2 = getUsr(10, (hasil) => {
//   console.log(hasil);
// })

const cetakH = "hello world"

// console.log(cetakH)

module.exports = {
  getUsr,
  cetakH
}