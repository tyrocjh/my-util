/**
 * @description 取平均数
 * @param {Array} nums
 * @return {Number}
 *
 * eg.
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 */
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length

module.exports = average
