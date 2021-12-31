/**
 * @description 反转一个字符串
 * @param {String} str
 * @return {String}
 *
 * eg.
 * reverseString('foobar'); // 'raboof'
 */
const reverseString = str => [...str].reverse().join('')

module.exports = reverseString
