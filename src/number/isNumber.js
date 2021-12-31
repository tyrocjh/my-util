/**
 * @description 判读是否为数字
 * @param {Number} number
 * @return {Boolean}
 *
 * eg.
 * isNumber(1) // true
 * isNumber('1q') // false
 */
const isNumber = number =>
  !isNaN(parseFloat(number)) && isFinite(number) && Number(number) == number

module.exports = isNumber
