/**
 * @desc   随机化数组的顺序
 * @return {Array}
 *
 * eg.
 * shuffle([1,2,3]); // [2,3,1]
 */
const shuffle = arr => arr.sort(() => Math.random() - 0.5)

module.exports = shuffle
, foo = [1, 2, 3]
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
