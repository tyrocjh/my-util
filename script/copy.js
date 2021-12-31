const path = require('path')
const fs = require('fs')
const rm = require('rimraf')
const copy = require('copy')

const rootPath = path.resolve(__dirname, '../')

rm('lib/*.js', err => {
  if (err) throw err
  let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
  folderList.forEach((item, index) => {
    copy(`src/${item}/*.js`, path.resolve(rootPath, 'lib'), function(err, files) {
      if (err) throw err
    })
  })
})
