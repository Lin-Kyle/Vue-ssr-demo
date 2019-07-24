import createApp from '../src/app'

const app = createApp()

router.onReady(() => {
  app.$mount('#root')
})