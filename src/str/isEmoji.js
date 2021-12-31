/**
 * @desc   判断是否是emoji
 * @param  {String} str 字符串
 * @return {Boolean}
 *
 * eg.
 * isEmoji('🌏') // true
 * isEmoji('earth') // false
 */
const isEmoji = str =>
  /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g.test(
    str
  )

module.exports = isEmoji
