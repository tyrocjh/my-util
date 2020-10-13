/**
 * @desc   html encode（防止xss）
 * @return {String} 
 */
function htmlEncode(html) {
    var temp = document.createElement ("div");
    (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
    var output = temp.innerHTML;
    temp = null;
    return output;
}

/**
 * @desc   html decode（防止xss）
 * @return {String} 
 */
function htmlDecode(text) {
    var temp = document.createElement("div");
    temp.innerHTML = text;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

/**
 * @desc   html encode（防止xss）
 * @return {String} 
 */
function htmlEncodeByRegExp(str) {
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&/g,"&amp;");
    s = s.replace(/</g,"&lt;");
    s = s.replace(/>/g,"&gt;");
    s = s.replace(/ /g,"&nbsp;");
    s = s.replace(/\'/g,"&#39;");
    s = s.replace(/\"/g,"&quot;");
    return s;
}

/**
 * @desc   html decode（防止xss）
 * @return {String} 
 */
function htmlDecodeByRegExp(str) {
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&amp;/g,"&");
    s = s.replace(/&lt;/g,"<");
    s = s.replace(/&gt;/g,">");
    s = s.replace(/&nbsp;/g," ");
    s = s.replace(/&#39;/g,"\'");
    s = s.replace(/&quot;/g,"\"");
    return s;
}

export default {
    htmlEncode,
    htmlDecode,
    htmlEncodeByRegExp,
    htmlDecodeByRegExp
}
