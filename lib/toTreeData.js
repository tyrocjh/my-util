/*
 * 构造树形结构
 * @param {Array} data 需要处理的扁平数组
 * @param {String} pid 父级id
 * @return {Object}
 *
 */
const toTreeData = (data, pid) => {
  function tree(id) {
    let arr = []
    data
      .filter(item => {
        return item.parentId === id
      })
      .forEach(item => {
        arr.push({
          id: item.id,
          name: item.name,
          parentId: item.parentId,
          children: tree(item.id),
        })
      })
    return arr
  }
  return tree(pid)
}

module.exports = toTreeData
