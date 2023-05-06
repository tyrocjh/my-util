/**
 * @desc   判断是否是url
 * @param  {String} str 字符串
 * @return {Boolean}
 *
 * eg.
 * isUrl('https://www.baidu.com') // true
 * isUrl('https://www') // false
 */
const isUrl = (str) =>
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(
    str
  );

module.exports = isUrl;
