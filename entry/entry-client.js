import createApp from '../src/app'

const { app, router, store } = createApp()

// 挂载数据
if (window.__INITIAL_STATE__) {
  // 替换 store 的根状态，仅用状态合并或时光旅行调试。
  store.replaceState(window.__INITIAL_STATE__)
}

// 路由完成初始导航时调用
router.onReady(() => {
  // 添加路由钩子函数，用于处理 asyncData.
  // 在初始路由 resolve 后执行，
  // 以便我们不会二次预取(double-fetch)已有的数据。
  // 使用 `router.beforeResolve()`，以便确保所有异步组件都 resolve。
  router.beforeResolve((to, from, next) => {
    // 返回目标位置或是当前路由匹配的组件数组 (是数组的定义/构造类，不是实例)。通常在服务端渲染的数据预加载时使用。
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // 我们只关心非预渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    const activated = matched.filter((component, index) => {
      return diffed || (diffed = prevMatched[index] !== component)
    })

    if (!activated.length) {
      return next()
    }
    // 这里如果有加载指示器 (loading indicator)，就触发
    Promise.all(
      activated.map((component) => {
        if (component.asyncData) {
          return component.asyncData({ store, route: to })
        }
      })
    )
      .then(() => {
        // 停止加载指示器(loading indicator)
        next()
      })
      .catch(next)
  })

  // 挂载App.vue模板中根元素
  app.$mount('#app')
})
