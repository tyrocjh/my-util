/**
 * @desc  检查页面底部是否可见
 * @return {Boolean}
 *
 * eg.
 * bottomVisible(); // true
 */
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight)

module.exports = bottomVisible
