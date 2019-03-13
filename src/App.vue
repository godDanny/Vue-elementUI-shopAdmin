<template>
  <div id="app">
    <!-- 显示匹配的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'; 每次使用都导入比较麻烦  原型链-实例上的属性

export default {
  name: "app",
  mounted() {
    // 调用axios的get请求   返回promise,promise中有then方法
    // this.axios.get("https://api.github.com/users").then(res => {
    //   console.loog(res);
    // });

    //请求数据 测试用
    // this.$axios.get('https://api.github.com/users').then(res => {
    //   console.log(res.data);
    // });
  }
};
</script>

<style>
</style>
