/**
 * @desc 判断元素有没有子元素
 * @param {e} el dom元素
 */
const hasChildren = el => {
  var children = el.childNodes,
    len = children.length
  for (var i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true
    }
  }
  return false
}

module.exports = hasChildren
