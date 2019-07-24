const merge = require('webpack-merge'),
  nodeExternals = require('webpack-node-externals'),
  common = require('./webpack.common.js'),
  dev_conf = require('./webpack.dev.js'),
  {
    server
  } = require('./env'),
  VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(common, dev_conf, {
  // 入口
  entry: server.entry,
  // 输出
  output: {
    // 打包文件名
    filename: server.outputName,
    // 输出路径
    path: server.outputPath,
    // 资源请求路径
    publicPath: server.publicPath,
    libraryTarget: 'commonjs2',
  },
  // 对 bundle renderer 提供 source map 支持
  devtool: 'source-map',
  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
  // 并且还会在编译 Vue 组件时，
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: 'node',
  externals: nodeExternals({
    // 不要外置化 webpack 需要处理的依赖模块。
    // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
    // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
    whitelist: /\.css$/
  }),
  // 这是将服务器的整个输出
  // 构建为单个 JSON 文件的插件。
  // 默认文件名为 `vue-ssr-server-bundle.json`
  plugins: [
    new VueSSRServerPlugin()
  ]
});