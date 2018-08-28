<template>
  <runoob></runoob>
</template>

<script>
  import Vue from 'vue' // 引入vue
    export default {
        name: "zujian"
    }
    // 注册
    Vue.component('runoob', {
      template: '<h1>自定义组件!</h1>'
    })
</script>

<style scoped>

</style>
