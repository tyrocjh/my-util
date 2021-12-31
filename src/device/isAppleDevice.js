/**
 * @desc   判断是否为苹果设备
 * @return {Boolean}
 */
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform)

module.exports = isAppleDevice
