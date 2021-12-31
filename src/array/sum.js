/**
 * @description 数组总和
 * @param {Array} arr
 * @return {Number}
 *
 * eg.
 * sum([1,2,3,4]); // 10
 */
const sum = arr => arr.reduce((acc, val) => acc + val, 0)

module.exports = sum
