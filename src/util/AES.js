import CryptoJS from 'crypto-js';

export default {
  key: '',//与服务端协商一致的key值
  /**
   * [encrypt 加密]
   * @param word
   * @return {[type]} [description]
   */
  encrypt(word) {
    const key = CryptoJS.enc.Utf8.parse(this.key);
    const encryptResult = CryptoJS.AES.encrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    const hexStr = encryptResult.ciphertext.toString();
    return hexStr;
  },

  /**
 * [decrypt 解密]
 * @param word
 * @return {[type]} [description]
 */
  decrypt(word) {
    if (!word) {
      return '';
    }
    const key = CryptoJS.enc.Utf8.parse(this.key);
    const bytes = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
      format: CryptoJS.format.Hex
    });
    const decryptResult = bytes.toString(CryptoJS.enc.Utf8);
    return decryptResult.toString();
  }
};
