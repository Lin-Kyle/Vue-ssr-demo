import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default function createRouter () {
  return new Router({
    // 要记得增加mode属性，因为#后面的内容不会发送至服务器，服务器不知道请求的是哪一个路由
    mode: 'history',
    routes: [
      {
        // 首页
        alias: '/',
        path: '/view1:id',
        component: () => import('../page/view1.vue')
      },
      {
        path: '/view2:id',
        component: () => import('../page/view2.vue')
      }
    ]
  })
}
