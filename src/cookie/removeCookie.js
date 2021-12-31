/**
 * @desc  根据name删除cookie
 * @param {String} name
 */
const setCookie = require('./setCookie')

const removeCookie = name => {
  setCookie(name, '1', -1) // 设置已过期，系统会立刻删除cookie
}

module.exports = removeCookie
