/**
 * @desc   判断元素是否有某个class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 * @return {Boolean}
 */
function hasClass(ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}

/**
 * @desc  为元素添加class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

/**
 * @desc  为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

export default {
    hasClass,
    addClass,
    removeClass
}
