const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const common = require('./webpack.common.js')
const dev_conf = require('./webpack.dev.js')
const { client } = require('./env')

module.exports = merge(common, dev_conf, {
  // 入口
  entry: client.entry,
  // 输出
  output: client.output,
  plugins: [
    // 生成客户端构建清单 (client build manifest)
    // 默认文件名为 `vue-ssr-client-manifest.json`
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin(client.htmlPluginOpt)
  ]
})
