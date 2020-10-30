/**
 * @desc  校验指定元素是否有指定类
 * @param {ele} 指定元素
 * @param {String} 指定类名
 * @return {Boolean}
 *
 * eg.
 * hasClass(document.querySelector('p.special'), 'special'); // true
 */
export const hasClass = (el, className) => el.classList.contains(className);

/**
 * @desc  检查是否包含子元素
 * @return {Boolean}
 *
 * eg.
 * elementContains(document.querySelector('head'), document.querySelector('title')); // true
 * elementContains(document.querySelector('body'), document.querySelector('body')); // false
 */
export const elementContains = (parent, child) => parent !== child && parent.contains(child);

/**
 * @desc  检查页面底部是否可见
 * @return {Boolean}
 *
 * eg.
 * bottomVisible(); // true
 */
export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

/**
 * 获取节点对象的上下左右边距及宽高
 * @param {Dom-Object} element 需要获取相应信息的dom节点对象
 * 示例
 * let demo = document.querySelector('#demo')
 * let rect = getRect(demo)
 * console.log(rect)
 */
export const getRect = (element) => {
  const rect = element.getBoundingClientRect(),
    top = document.documentElement.clientTop,
    left = document.documentElement.clientLeft

  return {
    top: rect.top - top,
    bottom: rect.bottom - top,
    left: rect.left - left,
    right: rect.right - left,
    width: rect.width,
    height: rect.height
  }
}

/**
 * @desc    获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param   {HTMLElement} ele 
 * @returns { {left: number, top: number} }
 */
export const offset = (ele) => {
    var pos = {
        left: 0,
        top: 0
    };
    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
    };
    return pos;
}

/**
 * @desc 获取滚动条距顶部的距离
 */
export const getScrollTop = () => {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

/**
 * @desc  设置滚动条距顶部的距离
 * @param {Number} value
 */
export const setScrollTop = (value) => {
    window.scrollTo(0, value);
    return value;
}

/**
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 
 * @param {Number} duration 
 */
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
export const scrollTo = (to, duration) => {
    if (duration < 0) {
        setScrollTop(to);
        return
    }
    var diff = to - getScrollTop();
    if (diff === 0) return
    var step = diff / duration * 10;
    requestAnimFrame(
        function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 16);
        });
}

/**
 * @desc  H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */
export const windowResize = (downCb, upCb) => {
    var clientHeight = window.innerHeight;
    downCb = typeof downCb === 'function' ? downCb : function () {}
    upCb = typeof upCb === 'function' ? upCb : function () {}
    window.addEventListener('resize', () => {
        var height = window.innerHeight;
        if (height === clientHeight) {
            downCb();
        }
        if (height < clientHeight) {
            upCb();
        }
    });
}
