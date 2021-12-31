/**
 * @desc 获取滚动条距顶部的距离
 */
const getScrollTop = () => {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  )
}

module.exports = getScrollTop
