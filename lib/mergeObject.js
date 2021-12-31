/**
 * @desc 合并对象
 * @param source 源对象
 * @param other 额外对象
 * @returns {*}
 */
const isObject = require('./isObject')

const mergeObject = (source, other) => {
  if (!isObject(source) || !isObject(other)) {
    return other === undefined ? source : other
  }
  return Object.keys({
    ...source,
    ...other,
  }).reduce(
    (acc, key) => {
      acc[key] = mergeObject(source[key], other[key])
      return acc
    },
    Array.isArray(source) ? [] : {}
  )
}

module.exports = mergeObject
