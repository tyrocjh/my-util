/**
 * @desc   判断obj是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
const isEmptyObject = obj => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false
  return !Object.keys(obj).length
}

module.exports = isEmptyObject
