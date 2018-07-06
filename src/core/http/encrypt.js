var CryptoJS = require('./aes.js')

const encryptAES = data =>{
  var currDate = new Date();
  var year = currDate.getFullYear();
  var month = currDate.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var day = currDate.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  var key = "Apass@" + year + month + day+"00";

  var key = CryptoJS.CryptoJS.enc.Utf8.parse(key);

  var srcs = CryptoJS.CryptoJS.enc.Utf8.parse(data);
  var data = CryptoJS.CryptoJS.AES.encrypt(srcs, key, {
    iv: key,
    mode: CryptoJS.modeECB,
    padding: CryptoJS.CryptoJS.pad.Pkcs7
  }).toString();
  return data
}

module.exports = {
  encryptAES: encryptAES
}