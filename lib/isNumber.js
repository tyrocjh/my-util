/**
 * @description 判断是否数字
 *              使用!isNaN和parseFloat()来检查参数是否是一个数字，使用isFinite()来检查数字是否是有限的
 * @param {String} n
 * @return {Boolean}
 *
 * eg.
 * isNumber('10'); // true
 */
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n

module.exports = isNumber
