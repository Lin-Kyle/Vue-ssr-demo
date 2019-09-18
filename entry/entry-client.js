import createApp from '../src/app'

const { app, router, store } = createApp()

// 挂载数据
if (window.__INITIAL_STATE__) {
  // 替换 store 的根状态，仅用状态合并或时光旅行调试。
  store.replaceState(window.__INITIAL_STATE__)
}

// 路由完成初始导航时调用
router.onReady(() => {
  // 挂载App.vue模板中根元素
  app.$mount('#app')
})
