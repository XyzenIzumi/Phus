const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283877118785@s.whatsapp.net"]
global.nomerOwner = "6283877118785"
global.nomorOwner = ['6283877118785']
global.nameGEDE = "Kii Code"
global.namaDeveloper = "Kii Code"
global.namaBot = "Kii Push Contact"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By kezz
DI UPDATE Dan Di Tulis Ulang Oleh kezz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Admin Panel : 30k
Chat Wa : 6283134291600

*/