/**
 * @desc  设置滚动条距顶部的距离
 * @param {Number} value
 */
const setScrollTop = value => {
  window.scrollTo(0, value)
  return value
}

module.exports = setScrollTop
