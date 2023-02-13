import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import type { CookiesStatic, CookieAttributes } from "js-cookie";

interface Cookie {
  set: CookiesStatic["set"];
  get: <T = unknown>(name: string) => T | undefined;
  remove: CookiesStatic["remove"];
  setToken: (value: string, cookieExpires: any) => void;
  getToken: () => string | undefined;
  removeToken: () => void;
}

const KEY = CryptoJS.enc.Utf8.parse("d7b85f6e214abcde");
// 加密
const AES_Encrypt = (plaintext: string) => {
  const ciphertext: string = CryptoJS.AES.encrypt(plaintext, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  return ciphertext;
};
// 解密
const AES_Decrypt = (jsonStr: string) => {
  const plaintext: string = CryptoJS.AES.decrypt(jsonStr, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
  return plaintext;
};

function setEncryptCookie(key: string, data: any, options?: CookieAttributes) {
  const ciphertext = AES_Encrypt(data);
  return Cookies.set(key, ciphertext, options);
}

function getDecryptCookie(key: string) {
  const plaintext = Cookies.get(key);
  if (!plaintext) return undefined;
  try {
    const decryptStr = AES_Decrypt(plaintext);
    return JSON.parse(decryptStr);
  } catch (error) {
    return undefined;
  }
}

const set_token = (token: string, cookieExpires: any) => {
  Cookies.set("token", token, { expires: cookieExpires || 1 });
};

const get_token = () => {
  const token = Cookies.get("token");
  if (token) return token;
  else return undefined;
};

const remove_token = () => {
  Cookies.remove("token");
};

const cookie: Cookie = {
  set: setEncryptCookie,
  get: getDecryptCookie,
  remove: Cookies.remove,
  setToken: set_token,
  getToken: get_token,
  removeToken: remove_token,
};

export default cookie;
