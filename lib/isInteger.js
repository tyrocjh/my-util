/**
 * @description 判读数字是否为整数
 * @param {Number} number
 * @return {Boolean}
 *
 * eg.
 * isInteger(12) // true
 * isInteger(12.34) // false
 */
const isInteger = number => {
  return /^[-+]?\d*$/.test(number)
}

module.exports = isInteger
