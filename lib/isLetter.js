/**
 * @desc 是否是英文字母
 * @param { str } str
 * @return {Boolean}
 */
const isLetter = str => {
  return /^[a-zA-Z]*$/.test(str)
}

module.exports = isLetter
