/**
 * @desc   判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
export const isIdCard = (str) => {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
export const isEmail = (str) => {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
export const isPhoneNum = (str) => {
    return /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|18[0-9]|19[0-9]|17[0-9])([0-9]{8})$/.test(str);
}

/**
 * @desc 是否固定电话
 * @param { String } str
 * @return {Boolean}
 */
export const isLandline = (str) => {
    return /^\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(str);
}

/**
 * @desc 是否是英文字母
 * @param { str } str
 * @return {Boolean}
 */
export const isLetter = (str) => {
    return /^[a-zA-Z]*$/.test(str);
}

/**
 * @desc 是否是中文
 * @param { str } str
 * @return {Boolean}
 */
export const isChinese = (value) => {
    return /^[\u4e00-\u9fa5]+$/gi.test(value);
}

/**
 * @desc   判断密码格式是否6-25字符必须包含大小写字母+数字
 * @param  {String}  str
 * @return {Boolean} 
 */
export const isValidPwd = (str) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,25}$/.test(str);
}

/**
 * @desc   判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @return {Boolean} 
 */
export const isColor = (str) => {
	return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(str);
}

/**
 * @desc 只能输入数字, 不符合字符的会替换为空
 * @param {string} str - 参数str
 * @return { string } - 替换后的字符
 */
export const filterNum = (str) => {
    if (str) {
        str = str.replace(/[^\d]/g,"");
        return str;
    }
    return str;
}

/**
 * @desc 只能输入英文、中文和数字，不符合字符的会替换为空
 * @param { string } str - 参数str
 * @return { string } - 替换后的字符
 */
export const filterCENum = (str) => {
    if (str) {
        str = str.replace(/[^a-zA-Z\d\u4e00-\u9fa5]/g,"");
        return str;
    }
    return str;
}

/**
 * @desc 只能输入英文、和数字，不符合字符的会替换为空
 * @param {string} str - 参数str
 * @return { string } - 替换后的字符
 */
export const filterENum = (str) => {
    if (str) {
        str = str.replace(/[^a-zA-Z\d]/g,"");
        return str;
    }
    return str;
}

/**
 * @desc 只能输入数字和一个小数点，不符合字符的会替换为空
 * @param { string } str - 参数str
 * @return { string } - 替换后的字符
 */
export const filterFloate = (str) => {
    if (str) {
        str = str.replace(/[^\d.]/g,"");
        str = str.replace(/(\.\d*)(\.\d*)/g,"$1");
        return str;
    }
    return str;
}

/**
 * @desc   转义HTML(防XSS攻击)
 * @param  {String}  str
 *
 * eg.
 * escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
 */
export const escapeHTML = (str) =>
    str.replace(
        /[&<>'"]/g,
        tag =>
        ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );

/**
 * @desc   手机号脱敏处理
 * @param  {String}  str
 *
 * eg.
 * encryptPhone('13725259631'); // '137****9631'
 */
export const encryptPhone = (str) => {
    if (!str) return '';
    return str.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
}

/**
 * @desc   身份证号脱敏处理
 * @param  {String}  str
 *
 * eg.
 * encryptIdentity('440111199210154512'); // '4401***********4512'
 */
export const encryptIdentity = (str) => {
    if (!str) return '';
    return str.replace(/(\d{4})\d*(\d{4})/, '$1***********$2');
}
