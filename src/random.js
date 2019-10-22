/**
 * @desc   生成指定范围的随机整数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 *
 * eg.
 * randomIntegerInRange(0, 5); // 3
 */
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @desc   生成指定范围的随机小数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 *
 * eg.
 * randomNumberInRange(2, 10); // 6.0211363285087005
 */
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

/**
 * @desc   随机生成颜色
 * @return {String} 
 */
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

export default {
    randomIntegerInRange,
    randomNumberInRange,
    randomColor
}
