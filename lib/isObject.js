/**
 * @desc 判断是否对象
 * @param value 对象
 * @returns {}
 */
const isObject = value => {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

module.exports = isObject
