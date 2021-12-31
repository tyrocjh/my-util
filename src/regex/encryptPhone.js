/**
 * @desc   手机号脱敏处理
 * @param  {String}  str
 *
 * eg.
 * encryptPhone('13725259631'); // '137****9631'
 */
const encryptPhone = str => {
  if (!str) return ''
  return str.replace(/(\d{3})\d*(\d{4})/, '$1****$2')
}

module.exports = encryptPhone
