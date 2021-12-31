/**
 * @desc   html encode（防止xss）
 * @return {String}
 */
const htmlEncodeByRegExp = str => {
  var s = ''
  if (str.length == 0) return ''
  s = str.replace(/&/g, '&amp;')
  s = s.replace(/</g, '&lt;')
  s = s.replace(/>/g, '&gt;')
  s = s.replace(/ /g, '&nbsp;')
  s = s.replace(/\'/g, '&#39;')
  s = s.replace(/\"/g, '&quot;')
  return s
}

module.exports = htmlEncodeByRegExp
