/**
 * @desc   生成指定范围的随机整数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 *
 * eg.
 * randomIntegerInRange(0, 5); // 3
 */
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

module.exports = randomIntegerInRange
