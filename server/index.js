const path = require('path')
const Koa = require('koa')
const logger = require('koa-logger')
const serve = require('koa-static')
const router = require('./router')

// 创建Koa实例
const app = new Koa()
app
  .use(logger())
  .use(serve(path.resolve(__dirname, '../dist/client')))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3005)

console.log('已建立连接，效果请看http://127.0.0.1:3005/')
