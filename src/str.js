/**
 * @description 首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalize('fooBar'); // 'FooBar'
 * capitalize('fooBar', true); // 'FooBar'
 */
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

/**
 * @description 每个单词首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * @description 首字母小写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * decapitalize('FooBar'); // 'fooBar'
 * decapitalize('FooBar'); // 'fooBar'
 */
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

/**
 * @description 从字符串中删除HTML/XML标签
 * @param {String} str
 * @return {String}
 *
 * eg.
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 */
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

/**
 * @description 返回字符串的字节长度
 * @param {String} str
 * @return {Number}
 *
 * eg.
 * byteSize('😀'); // 4
 * byteSize('Hello World'); // 11
 */
const byteSize = str => new Blob([str]).size;

export default {
  capitalize,
  capitalizeEveryWord,
  decapitalize,
  stripHTMLTags,
  byteSize
}
