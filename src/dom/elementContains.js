/**
 * @desc  检查是否包含子元素
 * @return {Boolean}
 *
 * eg.
 * elementContains(document.querySelector('head'), document.querySelector('title')); // true
 * elementContains(document.querySelector('body'), document.querySelector('body')); // false
 */
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child)

module.exports = elementContains
