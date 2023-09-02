import dns from "dns/promises"
 
const adress = await dns("www.programming.com")

console.info(adress.adress);