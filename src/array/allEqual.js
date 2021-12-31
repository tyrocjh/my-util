/**
 * @description 检查数组各项是否相等
 * @param {Array} arr
 * @return {Boolean}
 *
 * eg.
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
const allEqual = arr => arr.every(val => val === arr[0])

module.exports = allEqual
