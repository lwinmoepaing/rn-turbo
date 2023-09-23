import crypto from "crypto";
import { AES, enc } from "crypto-js";
import config from "../config/config";

export const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");

  return { hash, salt };
};

interface VerifiedPasswordProps {
  canditatePassword: string;
  salt: string;
  hash: string;
}
export const verifyPassword = ({
  canditatePassword,
  salt,
  hash,
}: VerifiedPasswordProps) => {
  const candidateHash = crypto
    .pbkdf2Sync(canditatePassword, salt, 1000, 64, "sha512")
    .toString("hex");

  return candidateHash === hash;
};

export const encryptText = (text: string) => {
  // Encrypt
  return AES.encrypt(text, config.LOVE_LETTER_SECRET).toString();
};

export const decryptText = (cryptedText: string) => {
  // Decrypt
  const bytes = AES.decrypt(cryptedText, config.LOVE_LETTER_SECRET);
  const originalText = bytes.toString(enc.Utf8);
  return originalText;
};
