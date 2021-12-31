/**
 * @description 首字母小写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * decapitalize('FooBar'); // 'fooBar'
 * decapitalize('FooBar'); // 'fooBar'
 */
const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('')

module.exports = decapitalize
