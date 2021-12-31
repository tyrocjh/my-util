/**
 * @desc   判断浏览器是否支持触摸事件
 * @return {Boolean}
 */
const touchSupported = () => {
  'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
}

module.exports = touchSupported
