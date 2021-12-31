/**
 * @desc  校验指定元素是否有指定类
 * @param {ele} 指定元素
 * @param {String} 指定类名
 * @return {Boolean}
 *
 * eg.
 * hasClass(document.querySelector('p.special'), 'special'); // true
 */
const hasClass = (el, className) => el.classList.contains(className)

module.exports = hasClass
