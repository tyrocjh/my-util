/**
 * @desc 获取任一元素的任意属性
 * @param {elem} el dom元素
 * @param {prop} prop 属性
 */
const getStyle = (elem, prop) => {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop]
}

module.exports = getStyle
