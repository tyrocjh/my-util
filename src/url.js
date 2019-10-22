/**
 * @desc   获取url参数值
 * @param  {String} name 参数名
 * @param  {String} url  查询的URL字符串，如果不传则默认取当前url
 * @return {String}
 */
function getQueryString(name, url) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
        urls = url || window.location.search,
        r = urls.substr(urls.indexOf('?') + 1).match(reg);
  if (r != null) return decodeURIComponent(r[2])
  return "";
}

/**
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
function parseQueryToObj(url) {
    url = !url ? window.location.href : url;
    if(url.indexOf('?') === -1) {
        return {};
    }
    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
    if (search === '') {
        return {};
    }
    search = search.split('&');
    var query = {};
    for (var i = 0; i < search.length; i++) {
        var pair = search[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

/**
 * @desc   HTTP跳转HTTPS
 *
 * eg.
 * httpsRedirect(); // 若在`http://www.baidu.com`, 则跳转到`https://www.baidu.com`
 */
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

export default {
    getQueryString,
    parseQueryToObj,
    httpsRedirect
}
