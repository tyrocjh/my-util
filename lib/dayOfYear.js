/**
 * @desc    当前日期天数
 * @param   {Date} date
 * @returns {Number}
 *
 * eg.
 * dayOfYear(new Date()); // 295
 */
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

module.exports = dayOfYear
