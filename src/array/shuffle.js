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
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    [arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

module.exports = shuffle
