/**
 * @desc 只能输入数字和一个小数点，不符合字符的会替换为空
 * @param { string } str - 参数str
 * @return { string } - 替换后的字符
 */
const filterFloate = str => {
  if (str) {
    str = str.replace(/[^\d.]/g, '')
    str = str.replace(/(\.\d*)(\.\d*)/g, '$1')
    return str
  }
  return str
}

module.exports = filterFloate
