const path = require('path')

// 创建 import 或 require 的别名，来确保模块引入变得更简单
module.exports = {
  '@': path.resolve(__dirname, '../src/'),
  IMG: path.resolve(__dirname, '../src/img'),
  ROUTER: path.resolve(__dirname, '../src/router'),
  VUEX: path.resolve(__dirname, '../src/vuex'),
  PAGE: path.resolve(__dirname, '../src/page'),
  CMT: path.resolve(__dirname, '../src/component')
}
