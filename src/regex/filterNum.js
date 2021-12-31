/**
 * @desc 只能输入数字, 不符合字符的会替换为空
 * @param {string} str - 参数str
 * @return { string } - 替换后的字符
 */
const filterNum = str => {
  if (str) {
    str = str.replace(/[^\d]/g, '')
    return str
  }
  return str
}

module.exports = filterNum
