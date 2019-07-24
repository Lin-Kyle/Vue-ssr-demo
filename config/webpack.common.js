const HtmlWebpackPlugin = require("html-webpack-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  ProgressBarPlugin = require('progress-bar-webpack-plugin'),
  webpack = require('webpack'),
  alias = require("./alias"),
  rules = require("./rules"),
  stats = require("./stats"),
  {
    isProd, title
  } = require('./env');

module.exports = {
  module: {
    rules
  },
  stats,
  performance: {
    hints: false // 取消静态文件超过250kbkb的警告
  },
  plugins: [
    // 清除文件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // 进度条展示
    new ProgressBarPlugin(),
    // 该插件帮助我们安心地使用环境变量
    new webpack.DefinePlugin({
      'process.env.project': 'demo'
    }),
    // 提取样式文件
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename:
        !isProd
          ? "[name].css"
          : "style/[name].[contenthash].css",
      chunkFilename:
        !isProd
          ? "[id].css"
          : "style/[id].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      // title
      title,
      // 模板
      template: "index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', 'scss', 'css'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单
    alias
  }
};
