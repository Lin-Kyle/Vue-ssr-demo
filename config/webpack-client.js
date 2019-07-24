const merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  dev_conf = require('./webpack.dev.js'), {
    client
  } = require('./env'),
  VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = merge(common, dev_conf, {
  // 入口
  entry: client.entry,
  // 输出
  output: {
    // 打包文件名
    filename: client.outputName,
    // 输出路径
    path: client.outputPath,
    // 资源请求路径
    publicPath: client.publicPath
  },
  plugins: [
    new VueSSRClientPlugin()
  ]

});