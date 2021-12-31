/**
 * @desc   身份证号脱敏处理
 * @param  {String}  str
 *
 * eg.
 * encryptIdentity('440111199210154512'); // '4401***********4512'
 */
const encryptIdentity = str => {
  if (!str) return ''
  return str.replace(/(\d{4})\d*(\d{4})/, '$1***********$2')
}

module.exports = encryptIdentity
