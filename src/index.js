import * as regex from './regex.js'
import * as url from './url.js'
import * as time from './time.js'
import * as array from './array.js'
import * as number from './number.js'
import * as str from './str.js'
import * as cookie from './cookie.js'
import * as clazz from './clazz.js'
import * as dom from './dom.js'
import * as object from './object.js'
import * as func from './func.js'
import * as random from './random.js'
import * as device from './device.js'
import * as money from './money.js'
import * as html from './html.js'

export default {
  ...regex,
  ...url,
  ...time,
  ...array,
  ...number,
  ...str,
  ...cookie,
  ...clazz,
  ...dom,
  ...object,
  ...func,
  ...random,
  ...device,
  ...money,
  ...html,
}

// let moduleExports = {}

// const r = require.context('./', false, /^\.\/.+\.js$/)
// r.keys().forEach(key => {
//     let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
//     moduleExports[attr] = r(key)
// })

// export default moduleExports
