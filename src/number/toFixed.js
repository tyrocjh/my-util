/**
 * @description 保留小数点（非四舍五入）
 * @param {Number} number
 * @param {Number} fixed
 * @return {Boolean}
 *
 * eg.
 * toFixed(25.198726354, 1);       // 25.1
 * toFixed(25.198726354, 2);       // 25.19
 * toFixed(25.198726354, 3);       // 25.198
 * toFixed(25.198726354, 4);       // 25.1987
 * toFixed(25.198726354, 5);       // 25.19872
 * toFixed(25.198726354, 6);       // 25.198726
 */
const toFixed = (number, fixed) =>
  ~~(Math.pow(10, fixed) * number) / Math.pow(10, fixed)

module.exports = toFixed
