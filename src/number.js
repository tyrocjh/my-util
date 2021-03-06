/**
 * @description 判读数字是否为偶数
 * @param {Number} number
 * @return {Boolean}
 *
 * eg.
 * isEven(2) // true
 * isEven(3) // false
 */
export const isEven = num => num % 2 === 0;

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
export const toFixed = (number, fixed) => ~~(Math.pow(10, fixed) * number) / Math.pow(10, fixed);
