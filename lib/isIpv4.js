/**
 * @desc   判断是否为IPv4地址
 * @param  {String} str
 * @return {Boolean}
 */
const isIpv4 = str => {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    str
  )
}

module.exports = isIpv4
