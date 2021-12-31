/**
 * @desc 返回元素的第n个兄弟节点
 * @param {e} el dom元素
 * @param {n} 第n个
 */
const retSibling = (e, n) => {
  while (e && n) {
    if (n > 0) {
      if (e.nextElementSibling) {
        e = e.nextElementSibling
      } else {
        for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
      }
      n--
    } else {
      if (e.previousElementSibling) {
        e = e.previousElementSibling
      } else {
        for (
          e = e.previousElementSibling;
          e && e.nodeType !== 1;
          e = e.previousElementSibling
        );
      }
      n++
    }
  }
  return e
}

module.exports = retSibling
