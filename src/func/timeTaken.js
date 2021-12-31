/**
 * @description 计算函数执行时间
 * @param {Function} callback
 * @return {Number}
 *
 * eg.
 * timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
 */
const timeTaken = callback => {
  console.time('timeTaken')
  const r = callback()
  console.timeEnd('timeTaken')
  return r
}

module.exports = timeTaken
