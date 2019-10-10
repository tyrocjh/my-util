/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
function isPhoneNum(str) {
    return /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|18[0-9]|19[0-9]|17[0-9])([0-9]{8})$/.test(str);
}

/**
 * @desc   判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}

/**
 * @desc   判断是否为URL地址
 * @param  {String} str 
 * @return {Boolean}
 */
function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * @desc   密码格式必须6-25字符必须包含大小写字母+数字
 * @param  {String}  str
 * @return {Boolean} 
 */
function isValidPwd(str) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,25}$/.test(str);
}

/**
 * @desc   判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @return {Boolean} 
 */
function isColor(str) {
	return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(str);
}

export default {
    isEmail,
    isPhoneNum,
    isIdCard,
    isUrl,
    isValidPwd,
    isColor
}
