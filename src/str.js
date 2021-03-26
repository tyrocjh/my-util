/**
 * @description 判断是否数字
 *              使用!isNaN和parseFloat()来检查参数是否是一个数字，使用isFinite()来检查数字是否是有限的
 * @param {String} n
 * @return {Boolean}
 *
 * eg.
 * isNumber('10'); // true
 */
export const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

/**
 * @desc   判断是否是url
 * @param  {String} str 字符串
 * @return {Boolean}
 *
 * eg.
 * isUrl('https://www.baidu.com') // true
 * isUrl('https://www') // false
 */
export const isUrl = str => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(str);

/**
 * @desc   判断是否是emoji
 * @param  {String} str 字符串
 * @return {Boolean}
 *
 * eg.
 * isEmoji('🌏') // true
 * isEmoji('earth') // false
 */
export const isEmoji = str => /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g.test(str);

/**
 * @desc 去空格
 * @param { string } str - 需要去掉空格的字符串
 * @param { string } pos - 去掉空格的位置
 * @return { string } - 去掉空格后的字符
 */
export const trim = (str, pos = 'both') => {
    if (pos == 'both') {
        // 去除两端空格
        return str.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
        // 去除左边空格
        return str.replace(/^\s*/, '');
    } else if (pos == 'right') {
        // 去除右边空格
        return str.replace(/(\s*$)/g, "");
    } else if (pos == 'all') {
        // 去除所有空格
        return str.replace(/\s+/g, "");
    } else {
        return str;
    }
}

/**
 * @description 补零
 * @param {Number, Number} n, len
 * @return {String}
 *
 * eg.
 * leftPad(1, 3); // 001
 */
export const leftPad = (n, len) => {
    len = len || 2;
    n = n + '';
    let diff = len - n.length;
    if (diff > 0) {
        n = new Array(diff + 1).join('0') + n;
    }
    return n;
}

/**
 * @description 数字每隔三位加一个逗号
 * @param {String} num
 * @return {String}
 *
 * eg.
 * fNumberWithComma(1234567) -> "1,234,567"
 */
export const fNumberWithComma = (num) => {
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(num)) {
        return num;
    }
    let a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
    let re = new RegExp("(\\d)(\\d{3})(,|$)");
    while (re.test(b))   b = b.replace(re, "$1,$2$3");
    return a + "" + b + "" + c;
}

/**
 * @description 保留小数点后n位
 * @param {String} s, n
 * @return {String}
 *
 * eg.
 * fNumber(12.345, 2) -> "12.35"
 */
export const fNumber = (s, n) => {
    n = n > 0 && n <= 10 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}

/**
 * @description 首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalize('fooBar'); // 'FooBar'
 * capitalize('fooBar', true); // 'FooBar'
 */
export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

/**
 * @description 每个单词首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 */
export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * @description 首字母小写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * decapitalize('FooBar'); // 'fooBar'
 * decapitalize('FooBar'); // 'fooBar'
 */
export const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

/**
 * @description 反转一个字符串
 * @param {String} str
 * @return {String}
 *
 * eg.
 * reverseString('foobar'); // 'raboof'
 */
export const reverseString = str => [...str].reverse().join('');

/**
 * @description 从字符串中删除HTML/XML标签
 * @param {String} str
 * @return {String}
 *
 * eg.
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 */
export const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

/**
 * @description 返回字符串的字节长度
 * @param {String} str
 * @return {Number}
 *
 * eg.
 * byteSize('😀'); // 4
 * byteSize('Hello World'); // 11
 */
export const byteSize = str => new Blob([str]).size;

/**
 * @description RGB转十六进制
 *              使用按位左移运算符（<<）和toString（16），然后padStart（6，“0”）将给定的RGB参数转换为十六进制字符串以获得6位十六进制值
 * @param {Number} r, g, b
 * @return {String}
 *
 * eg.
 * rgbToHex(255, 165, 1); // 'ffa501'
 */
export const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

/**
 * @description 连字符转驼峰
 * 
 * @param {String} str
 * @param {String} separator
 * @return {String}
 *
 * eg.
 * toCamelCase('hello-world') // helloWorld
 */
export const toCamelCase = (str = '', separator = '-') => {
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string')
    }
    if (str === '') {
        return str
    }
    const newExp = new RegExp('\\-\(\\w\)', 'g')
    return str.replace(newExp, (matched, $1) => {
        return $1.toUpperCase()
    })
}

/**
 * @description 驼峰转连字符
 * 
 * @param {String} str
 * @param {String} separator
 * @return {String}
 *
 * eg.
 * fromCamelCase('helloWorld') // hello-world
 */
export const fromCamelCase = (str = '', separator = '-') => {
    if (typeof str !== 'string') {
        throw new Error('Argument must be a string')
    }
    if (str === '') {
        return str
    }
    return str.replace(/([A-Z])/g, `${separator}$1`).toLowerCase()
}
