/**
 * @desc 去空格
 * @param { string } str - 需要去掉空格的字符串
 * @param { string } pos - 去掉空格的位置
 * @return { string } - 去掉空格后的字符
 */
const trim = (str, pos = 'both') => {
  if (pos == 'both') {
    // 去除两端空格
    return str.replace(/^\s+|\s+$/g, '')
  } else if (pos == 'left') {
    // 去除左边空格
    return str.replace(/^\s*/, '')
  } else if (pos == 'right') {
    // 去除右边空格
    return str.replace(/(\s*$)/g, '')
  } else if (pos == 'all') {
    // 去除所有空格
    return str.replace(/\s+/g, '')
  } else {
    return str
  }
}

module.exports = trim
