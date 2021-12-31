/**
 * @description 每个单词首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 */
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase())

module.exports = capitalizeEveryWord
