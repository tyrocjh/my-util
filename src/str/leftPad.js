/**
 * @description 补零
 * @param {Number, Number} n, len
 * @return {String}
 *
 * eg.
 * leftPad(1, 3); // 001
 */
const leftPad = (n, len) => {
  len = len || 2
  n = n + ''
  let diff = len - n.length
  if (diff > 0) {
    n = new Array(diff + 1).join('0') + n
  }
  return n
}

module.exports = leftPad
