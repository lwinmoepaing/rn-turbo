// If There is needed to add letter services

import { AES, enc } from "crypto-js";
import config from "../../config/config";

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
