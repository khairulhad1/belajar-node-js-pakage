// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
import chalk from "chalk";
import fs from "fs/promises";
import { existsSync } from "node:fs";
import validator from "validator";

const log = console.log;

// const rl = readline.createInterface({ input, output });

// membuat folder jika belum ada

const pathDir = "./data";
if (!existsSync(pathDir)) {
  await fs.mkdir(pathDir);
}

// membuat folder jika belum ada

const pathFil = "./data/user.json";
if (!existsSync(pathFil)) {
  await fs.writeFile(pathFil, "[]", "utf-8");
}

// const nama = await rl.question("siapa namamu ?");

// const contact = await rl.question("masukkan no hp mu:");

// const email = await rl.question("masukkan email kamu:");

const simpanUser = async (nama, email, contact) => {
  const user = {
    nama,
    email,
    contact,
  };

  const buffer = await fs.readFile("data/user.json");

  const bufString = buffer.toString();

  const users = JSON.parse(bufString);

  const duplicat = users.find((contact) => contact.nama === nama);

  // cek duplikat user

  if (duplicat) {
    log(chalk.white.bgRed.bold("nama sudah ada di daftar user"));
    return false;
  }

  // cek email

  if (email) {
    if (!validator.isEmail(email)) {
      log(chalk.white.bgGreen.bold("emailnya salah woy!! ketik ulang!"));
      return false;
    }
  }

  if (!validator.isMobilePhone(contact, "id-ID")) {
    log(chalk.white.bgGreen.bold("no hpnya salah woy!! ketik ulang!"));
    return false;
  }

  users.push(user);

  await fs.writeFile("data/user.json", JSON.stringify(users));

  log(chalk.blue.bgGray.bold(`terimakasih ${nama} telah mendaftar`));
};

export { simpanUser };
