<template>
  <div id="app">
    <h2>欢迎来到SSR渲染页面</h2>
    <router-link to="/view1:1">view1</router-link>
    <router-link to="/view2:2">view2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>