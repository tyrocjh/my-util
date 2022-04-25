/**
 * @description 判读数字是否为小数
 * @param {Number} number
 * @return {Boolean}
 *
 * eg.
 * isFloat(12) // false
 * isFloat(12.34) // true
 */
const isFloat = number => {
  return /^[-\+]?\d+\.\d+$/.test(number);
}

module.exports = isFloat
