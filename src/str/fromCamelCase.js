/**
 * @description 驼峰转连字符
 *
 * @param {String} str
 * @param {String} separator
 * @return {String}
 *
 * eg.
 * fromCamelCase('helloWorld') // hello-world
 */
const fromCamelCase = (str = '', separator = '-') => {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string')
  }
  if (str === '') {
    return str
  }
  return str.replace(/([A-Z])/g, `${separator}$1`).toLowerCase()
}

module.exports = fromCamelCase
