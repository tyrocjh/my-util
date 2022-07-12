/**
 * @desc   数字加逗号分隔
 * @param  {Number}  number
 *
 * eg.
 * addCommaToNum(123) // '123'
 * addCommaToNum(123456789) // '123,456,789'
 * addCommaToNum(123456789.123) // '123,456,789.123'
 */
const addCommaToNum = number => {
  number += ''
  return number.replace(new RegExp(`(?!^)(?=(\\d{3})+${number.includes('.') ? '\\.' : '$'})`, 'g'), ',')  
}

module.exports = addCommaToNum
