/**
 * @desc 判断 DOM 元素是否已获得焦点
 * @param {Function} el dom元素
 */
const elementIsInFocus = el => {
  return el === document.activeElement
}

module.exports = elementIsInFocus
