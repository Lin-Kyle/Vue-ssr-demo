import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        // 首页
        alias: '/',
        path: '/view1',
        component: () => import('../page/view1.vue')
      },
      {
        path: '/view2',
        component: () => import('../page/view2.vue')
      },
      { path: '*', redirect: '/view1' }
    ]
  })
}
