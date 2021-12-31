/**
 * @description 连字符转驼峰
 *
 * @param {String} str
 * @return {String}
 *
 * eg.
 * toCamelCase('hello-world') // helloWorld
 */
const toCamelCase = (str = '') => {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string')
  }
  if (str === '') {
    return str
  }
  const newExp = new RegExp('\\-(\\w)', 'g')
  return str.replace(newExp, (matched, $1) => {
    return $1.toUpperCase()
  })
}

module.exports = toCamelCase
