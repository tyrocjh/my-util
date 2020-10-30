/**
 * @desc 判断是否对象
 * @param value 对象
 * @returns {}
 */
export const isObject = (value) => {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

/**
 * @desc 合并对象
 * @param source 源对象
 * @param other 额外对象
 * @returns {*}
 */
export const mergeObject = (source, other) => {
  if (!isObject(source) || !isObject(other)) {
    return other === undefined ? source : other
  }
  return Object.keys({
    ...source,
    ...other
  }).reduce((acc, key) => {
    acc[key] = mergeObject(source[key], other[key])
    return acc
  }, Array.isArray(source) ? [] : {})
}

/**
 * @desc   全等判断(在两个变量之间进行深度比较以确定它们是否全等)
 * @param  {} a
 * @param  {} b
 * @return {Boolean}
 *
 * eg.
 * equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 */
export const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
};

/**
 * @desc   判断obj是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
export const isEmptyObject = (obj) => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}

/**
 * @desc   深拷贝，支持常见类型
 * @param  {Any} values
 * @return {Any}
 */
export const deepClone = (values) => {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == values || "object" != typeof values) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}
