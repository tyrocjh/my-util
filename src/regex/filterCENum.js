/**
 * @desc 只能输入英文、中文和数字，不符合字符的会替换为空
 * @param { string } str - 参数str
 * @return { string } - 替换后的字符
 */
const filterCENum = str => {
  if (str) {
    str = str.replace(/[^a-zA-Z\d\u4e00-\u9fa5]/g, '')
    return str
  }
  return str
}

module.exports = filterCENum
