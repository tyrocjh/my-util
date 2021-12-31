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
  const s = new Set(b)
  return a.filter(x => s.has(x))
}

module.exports = intersection
