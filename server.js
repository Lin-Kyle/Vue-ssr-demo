const Koa = require('koa')
const Vue = require('Vue')
const { createBundleRenderer } = require('vue-server-renderer')
const {
  client,
  server
} = require('./config/env')
// const clientBundleFileUrl = './dist/client/bundle.client.js'
const renderer = createBundleRenderer(`${server.outputPath}/vue-ssr-server-bundle.json`, {
  runInNewContext: false, // 推荐
})
// 创建Koa实例
const app = new Koa()
app.use(async ctx => {
  // 将 Vue 实例渲染为字符串, 回调函数第一个参数是可能抛出的错误，第二个参数是渲染完毕的字符串。
  try {
    const html = await renderer.renderToString({ url: ctx.request.url })
    ctx.body = (`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>demo</title></head>
        <body>${html}</body>
      </html>
    `)
  } catch (err) {
    console.log('err: ', err);
    ctx.throw(500, 'Internal Server Error')
  }

}).listen(3000);

console.log('已建立连接，效果请看http://127.0.0.1:3000/');