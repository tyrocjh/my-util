/**
 * @description 随机获取数组的某个值
 * @param {Array} arr
 * @return {Number}
 *
 * eg.
 * sample([3, 7, 9, 11]); // 9
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)]

module.exports = sample
