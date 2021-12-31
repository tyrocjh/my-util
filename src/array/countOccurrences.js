/**
 * @description 检测指定数值出现次数
 * @param {Array} arr
 * @param {Number} val
 * @return {Number}
 *
 * eg.
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

module.exports = countOccurrences
