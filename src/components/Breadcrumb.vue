<template>
    <div>
        <!-- 面包屑导航 -->
        <Breadcrumb separator=">" :style="{margin: '20px 0 20px 20px'}">
          <BreadcrumbItem to="item.src" v-for="(item,index) in routeInfo " :key="index">{{item.title}}</BreadcrumbItem>
          <!-- <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem> -->
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route)
    },
    computed:{
        // 监听路由变化，生成一个数组用于渲染面包屑信息
      routeInfo:function(){
// 获取多个路由记录
          const matched=this.$route.matched;
        //   重新生成一个循环格式
          var newArr=matched.map(v=>{
              return {
               src:v.push,
               title:v.meta
              }
          }) 
      }
    }

}
</script>

<style>

</style>
