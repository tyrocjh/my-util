/**
 * @desc   判断是否xx浏览器
 * @param  {String} xx浏览器
 * @return {Boolean}
 */
const getVersion = () => {
  var ua = navigator.userAgent,
    app = navigator.appVersion
  return {
    ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // 是否ios浏览器
    android: !!ua.match(/Android*/i), // 是否android浏览器
    webApp: !!ua.match(/Safari*/i), // 是否web应该程序，没有头部与底部
    weixin: !!ua.match(/MicroMessenger*/i), // 是否微信环境
    alipay: !!ua.match(/alipay*/i), // 是否支付宝环境
    dd: !!(ua.indexOf('DingTalk') > -1), // 是否钉钉浏览器
    uc: !!ua.match(/UCBrowser*/i), // 是否uc浏览器
    qq: !!ua.match(/MQQBrowser*/i), // 是否uc浏览器
    iPad: !!(ua.indexOf('iPad') > -1), // 是否为iPad
    appVersion: app,
    trident: !!(ua.indexOf('Trident') > -1), // IE内核
    presto: !!(ua.indexOf('Presto') > -1), // opera内核
    webKit: !!(ua.indexOf('AppleWebKit') > -1), //苹果、谷歌内核
    gecko: !!(ua.indexOf('Gecko') > -1) && ua.indexOf('KHTML') == -1, // 火狐内核
  }
}

module.exports = getVersion
