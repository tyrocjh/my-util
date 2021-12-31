/**
 * @desc    检查日期是否为工作日
 * @param   {Date} date
 * @returns {Boolean}
 *
 * eg.
 * isWeekday(new Date(2021, 0, 11))
 */
const isWeekday = date => date.getDay() % 6 !== 0

module.exports = isWeekday
