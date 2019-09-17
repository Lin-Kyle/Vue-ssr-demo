const path = require('path')
const isDev = process.env.NODE_ENV === 'DEV'
const isProd = true || process.env.NODE_ENV === 'PROD'
const isServer = process.env.NODE_ENV === 'SERVER'
const client = {
  entry: {
    client: path.resolve(__dirname, '../entry/entry-client.js')
  },
  output: {
    // 打包文件名
    filename: 'bundle.client.js',
    // 输出路径
    path: path.resolve(__dirname, '../dist/client'),
    // 资源请求路径
    publicPath: '/'
  },
  htmlPluginOpt: {
    title: "浏览器渲染",
    // 本地模板文件的位置
    template: path.resolve(__dirname, '../ejs/client.ejs'),
    // 输出文件的文件名称
    filename: 'client.html'
  }
}

const server = {
  entry: {
    server: path.resolve(__dirname, '../entry/entry-server.js')
  },
  output: {
    // 打包文件名
    filename: 'bundle.server.js',
    // 输出路径
    path: path.resolve(__dirname, '../dist/server'),
    // 资源请求路径
    publicPath: '/',
    // 导出的是 module.exports.default
    libraryTarget: 'commonjs2'
  },
  htmlPluginOpt: {
    title: "服务端渲染",
    // 本地模板文件的位置
    template: path.resolve(__dirname, '../ejs/server.ejs'),
    // 输出文件的文件名称
    filename: 'server.html',
    // webpack的stats对象的assetsByChunkName属性代表的值
    files: {
      js: 'bundle.client.js'
    },
    // 不允许注入
    excludeChunks: ['server']
  }
}

const title = 'test'

module.exports = {
  isDev,
  isProd,
  isServer,
  client,
  server,
  title
}
