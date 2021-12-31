/**
 * @description 首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalize('fooBar'); // 'FooBar'
 * capitalize('fooBar', true); // 'FooBar'
 */
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')

module.exports = capitalize
