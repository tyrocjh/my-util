let path = require('path')
let webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'util.js',
    library: 'tUtil', // 指定类库名,主要用于直接引用的方式(比如script)
    libraryTarget: 'umd', // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
    globalObject: 'this' // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
  },
  mode: "production", // 告诉webpack使用production模式的内置优化,
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader"
    }]
  }
}
