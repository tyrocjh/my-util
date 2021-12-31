/**
 * @desc 是否是中文
 * @param { str } str
 * @return {Boolean}
 */
const isChinese = value => {
  return /^[\u4e00-\u9fa5]+$/gi.test(value)
}

module.exports = isChinese
