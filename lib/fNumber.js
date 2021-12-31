/**
 * @description 保留小数点后n位
 * @param {String} s, n
 * @return {String}
 *
 * eg.
 * fNumber(12.345, 2) -> "12.35"
 */
const fNumber = (s, n) => {
  n = n > 0 && n <= 10 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  let l = s.split('.')[0].split('').reverse(),
    r = s.split('.')[1]
  let t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}

module.exports = fNumber
