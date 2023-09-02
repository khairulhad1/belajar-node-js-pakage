import yargs from "yargs/yargs";
import { simpanUser } from "./app.mjs";

const argv = yargs(process.argv.slice(2))
  .command({
    command: "add",
    describe: "menambahkan user baru",
    builder: {
      nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email kamu",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "no hpmu",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanUser(argv.nama, argv.email, argv.noHp);
    },
  })
  .help()
  .parse();
