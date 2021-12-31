/**
 * @desc    返回日期间的天数
 * @param   {Date} dateInitial
 * @param   {Date} dateFinal
 * @returns {Number}
 *
 * eg.
 * getDaysDiffBetweenDates(new Date('2019-01-01'), new Date('2019-10-14')); // 286
 */
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24)

module.exports = getDaysDiffBetweenDates
