/**
 * @description 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
const arrayEqual = (arr1, arr2) => {
    if (arr1 === arr2) return true;
    if (arr1.length != arr2.length) return false;
    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

/**
 * @description 随机获取数组的某个值
 * @param {Array} arr
 * @return {Number}
 *
 * eg.
 * sample([3, 7, 9, 11]); // 9
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * @description 数组“洗牌”(Fisher-Yates算法随机排序数组的元素)
 * @param {Array} arr
 * @return {Number}
 *
 * eg.
 * const foo = [1, 2, 3];
 * shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
 */
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

/**
 * @description 检测指定数值出现次数
 * @param {Array} arr
 * @param {Number} val
 * @return {Number}
 *
 * eg.
 * countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
 */
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * @description 检查数组各项是否相等
 * @param {Array} arr
 * @return {Boolean}
 *
 * eg.
 * allEqual([1, 2, 3, 4, 5, 6]); // false
 * allEqual([1, 1, 1, 1]); // true
 */
const allEqual = arr => arr.every(val => val === arr[0]);

/**
 * @description 取平均数
 * @param {Array} nums
 * @return {Number}
 *
 * eg.
 * average(...[1, 2, 3]); // 2
 * average(1, 2, 3); // 2
 */
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * @description 两数组的交集
 * @param {Array} a
 * @param {Array} b
 * @return {Array}
 *
 * eg.
 * intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
 */
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

export default {
	arrayEqual,
	sample,
	shuffle,
	countOccurrences,
	allEqual,
	average,
	intersection
}
