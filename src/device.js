/**
 * @desc   判断是否xx浏览器
 * @param  {String} xx浏览器
 * @return {Boolean}
 */
function getVersion() {
    var ua = navigator.userAgent,
        app = navigator.appVersion;
    return {
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // 是否ios浏览器
        android: !!ua.match(/Android*/i) , // 是否android浏览器
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
    };
}

/**
 * @desc   获取浏览器类型和版本
 * @return {String}
 */
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'Unkonwn'
}

/**
 * @desc   获取操作系统类型
 * @return {String}
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
}

export default {
    getVersion,
    getExplore,
    getOS
}
