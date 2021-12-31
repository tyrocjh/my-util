/**
 * @desc   随机化数组的顺序
 * @return {Array}
 *
 * eg.
 * shuffle([1,2,3]); // [2,3,1]
 */
const shuffle = arr => arr.sort(() => Math.random() - 0.5)

module.exports = shuffle
