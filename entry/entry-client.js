import createApp from '../src/app'

const { app, router } = createApp()
// 路由完成初始导航时调用
router.onReady(() => {
  // 挂载App.vue模板中根元素
  app.$mount('#app')
})
