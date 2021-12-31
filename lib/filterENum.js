/**
 * @desc 只能输入英文、和数字，不符合字符的会替换为空
 * @param {string} str - 参数str
 * @return { string } - 替换后的字符
 */
const filterENum = str => {
  if (str) {
    str = str.replace(/[^a-zA-Z\d]/g, '')
    return str
  }
  return str
}

module.exports = filterENum
