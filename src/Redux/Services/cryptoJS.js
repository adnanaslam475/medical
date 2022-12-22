import cryptojs from "crypto-js";
import { SECRET_KEY } from '../config.js'

export const encryptedStorage = (key, value, encrypted) => {
    if (encrypted) {
        localStorage.setItem(key, cryptojs.AES.encrypt(value, SECRET_KEY).toString())
        return
    }
    localStorage.setItem(key, value)
}


export const decryptedStorage = (key, decrypted) => {
    if (localStorage.getItem(key)) {
        if (decrypted) {
            try {
                const decryptedText = cryptojs.AES.decrypt(localStorage.getItem(key, SECRET_KEY))
                const decryptedString = decryptedText.toString(cryptojs.enc.Utf8)
                return decryptedString;
            } catch (error) {
                console.log('erererere', error)
                throw error
            }
        }
        return localStorage.getItem(key)
    }
}