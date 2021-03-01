/**
 * @desc   UUID生成器
 * @return {String} 
 *
 * eg.
 * uuid() -> '7982fcfe-5721-4632-bede-6000885be57d'
 */
export const uuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );

/**
 * @desc   生成指定范围的随机整数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 *
 * eg.
 * randomIntegerInRange(0, 5); // 3
 */
export const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * @desc   生成指定范围的随机小数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 *
 * eg.
 * randomNumberInRange(2, 10); // 6.0211363285087005
 */
export const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

/**
 * @desc   随机化数组的顺序
 * @return {Array} 
 *
 * eg.
 * shuffle([1,2,3]); // [2,3,1]
 */
export const shuffle = arr => arr.sort(() => Math.random() - 0.5);

/**
 * @desc   获取随机布尔值 (true/false)
 * @return {Boolean} 
 */
export const randomBoolean = () => Math.random() >= 0.5;

/**
 * @desc   随机生成颜色
 * @return {String} 
 */
export const randomColor = () => {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}
