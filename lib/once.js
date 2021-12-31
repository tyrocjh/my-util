/**
 * @description 只会调用一次的函数
 * @param {Function} fn
 * @return {Function}
 */
const once = fn => {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

module.exports = once
