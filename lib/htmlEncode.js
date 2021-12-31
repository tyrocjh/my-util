/**
 * @desc   html encode（防止xss）
 * @return {String}
 */
const htmlEncode = html => {
  var temp = document.createElement('div')
  temp.textContent != undefined
    ? (temp.textContent = html)
    : (temp.innerText = html)
  var output = temp.innerHTML
  temp = null
  return output
}

module.exports = htmlEncode
