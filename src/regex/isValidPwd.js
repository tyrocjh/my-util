/**
 * @desc   判断密码格式是否6-25字符必须包含大小写字母+数字
 * @param  {String}  str
 * @return {Boolean}
 */
const isValidPwd = str => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,25}$/.test(str)
}

module.exports = isValidPwd
