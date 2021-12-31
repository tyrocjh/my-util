/**
 * @description 返回字符串的字节长度
 * @param {String} str
 * @return {Number}
 *
 * eg.
 * byteSize('😀'); // 4
 * byteSize('Hello World'); // 11
 */
const byteSize = str => new Blob([str]).size

module.exports = byteSize
