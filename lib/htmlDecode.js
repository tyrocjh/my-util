/**
 * @desc   html decode（防止xss）
 * @return {String}
 */
const htmlDecode = text => {
  var temp = document.createElement('div')
  temp.innerHTML = text
  var output = temp.innerText || temp.textContent
  temp = null
  return output
}

module.exports = htmlDecode
