/**
 * @description 判断是否数字
 *              使用!isNaN和parseFloat()来检查参数是否是一个数字，使用isFinite()来检查数字是否是有限的
 * @param {String} n
 * @return {Boolean}
 *
 * eg.
 * isNumber('10'); // true
 */
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

/**
 * @description 数字每隔三位加一个逗号
 * @param {String} num
 * @return {String}
 *
 * eg.
 * fNumberWithComma(1234567) -> "1,234,567"
 */
function fNumberWithComma(num) {
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(num)) {
        return num;
    }
    var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
    var re = new RegExp("(\\d)(\\d{3})(,|$)");
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
function fNumber(s, n) {
    n = n > 0 && n <= 10 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
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
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

/**
 * @description 每个单词首字母大写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * capitalizeEveryWord('hello world!'); // 'Hello World!'
 */
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

/**
 * @description 首字母小写
 * @param {String} str
 * @return {String}
 *
 * eg.
 * decapitalize('FooBar'); // 'fooBar'
 * decapitalize('FooBar'); // 'fooBar'
 */
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

/**
 * @description 反转一个字符串
 * @param {String} str
 * @return {String}
 *
 * eg.
 * reverseString('foobar'); // 'raboof'
 */
const reverseString = str => [...str].reverse().join('');

/**
 * @description 从字符串中删除HTML/XML标签
 * @param {String} str
 * @return {String}
 *
 * eg.
 * stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
 */
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

/**
 * @description 返回字符串的字节长度
 * @param {String} str
 * @return {Number}
 *
 * eg.
 * byteSize('😀'); // 4
 * byteSize('Hello World'); // 11
 */
const byteSize = str => new Blob([str]).size;

/**
 * @description RGB转十六进制
 *              使用按位左移运算符（<<）和toString（16），然后padStart（6，“0”）将给定的RGB参数转换为十六进制字符串以获得6位十六进制值
 * @param {Number} r, g, b
 * @return {String}
 *
 * eg.
 * rgbToHex(255, 165, 1); // 'ffa501'
 */
const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

export default {
  isNumber,
  fNumberWithComma,
  fNumber,
  capitalize,
  capitalizeEveryWord,
  decapitalize,
  reverseString,
  stripHTMLTags,
  byteSize,
  rgbToHex
}
