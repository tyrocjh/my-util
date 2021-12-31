/**
 * @desc   获取url参数值
 * @param  {String} name 参数名
 * @param  {String} url  查询的URL字符串，如果不传则默认取当前url
 * @return {String}
 */
const getQueryString = (name, url) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
    urls = url || window.location.search,
    r = urls.substr(urls.indexOf('?') + 1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return ''
}

module.exports = getQueryString
