/**
 * @desc 是否固定电话
 * @param { String } str
 * @return {Boolean}
 */
const isLandline = str => {
  return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(str)
}

module.exports = isLandline
