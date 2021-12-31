/**
 * 获取节点对象的上下左右边距及宽高
 * @param {Dom-Object} element 需要获取相应信息的dom节点对象
 * 示例
 * let demo = document.querySelector('#demo')
 * let rect = getRect(demo)
 * console.log(rect)
 */
const getRect = element => {
  const rect = element.getBoundingClientRect(),
    top = document.documentElement.clientTop,
    left = document.documentElement.clientLeft

  return {
    top: rect.top - top,
    bottom: rect.bottom - top,
    left: rect.left - left,
    right: rect.right - left,
    width: rect.width,
    height: rect.height,
  }
}

module.exports = getRect
