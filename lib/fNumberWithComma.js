/**
 * @description 数字每隔三位加一个逗号
 * @param {String} num
 * @return {String}
 *
 * eg.
 * fNumberWithComma(1234567) -> "1,234,567"
 */
const fNumberWithComma = num => {
  if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(num)) {
    return num
  }
  let a = RegExp.$1,
    b = RegExp.$2,
    c = RegExp.$3
  let re = new RegExp('(\\d)(\\d{3})(,|$)')
  while (re.test(b)) b = b.replace(re, '$1,$2$3')
  return a + '' + b + '' + c
}

module.exports = fNumberWithComma
