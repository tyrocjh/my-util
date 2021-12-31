/**
 * @desc   判断是PC端还是移动端
 * @return {String}
 *
 * eg.
 * detectDeviceType(); // "Mobile" or "Desktop"
 */
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'Desktop'

module.exports = detectDeviceType
