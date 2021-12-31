/**
 * @description 从字符串中删除HTML/XML标签
 * @param {String} str
 * @return {String}
 *
 * eg.
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 */
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '')

module.exports = stripHTMLTags
