/**
 * @desc   生成指定范围的随机小数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 *
 * eg.
 * randomNumberInRange(2, 10); // 6.0211363285087005
 */
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min

module.exports = randomNumberInRange
