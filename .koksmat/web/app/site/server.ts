"use server";
import { run } from "@/magicservices/run";
import { randomBytes } from "crypto";
import path from "path";
import * as fs from "fs";

export async function getTransactionId() {
  return randomBytes(16).toString("hex");
}

export interface Security {
  passwords: string;
}

export async function validatePassword(password: string) {
  const filePath = path.join(process.env.DATAPATH ?? "", "passwords.json");
  const passwordText = fs.readFileSync(filePath, "utf-8");
  const security: Security = JSON.parse(passwordText);

  const validPassword = security.passwords.split("|").find((p) => {
    const pair = p.split("=");
    if (pair.length !== 2) return false;
    const now = Date.now();
    const date = Date.parse(pair[0]);
    if (now > date) return false;
    return pair[1] === password;
  });

  return validPassword !== undefined;
}
