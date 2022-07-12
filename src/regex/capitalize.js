/**
 * @desc   首字母大写
 * @param  {String}  str
 *
 * eg.
 * capitalize('hello world') // 'Hello World'
 * capitalize('hello WORLD') // 'Hello World'
 */
const capitalize = str => {
  const capitalizeRegex = /(?:^|\s+)\w/g
  return str.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase())
}

module.exports = capitalize
