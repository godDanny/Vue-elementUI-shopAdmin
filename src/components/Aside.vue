<template>
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="md-cart"></Icon>购物商城
          </template>
          <MenuItem name="1-1">商品管理</MenuItem>
          <MenuItem name="1-2">栏目管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="md-contacts"></Icon>会员
          </template>
          <MenuItem name="2-1">客户管理</MenuItem>
          <MenuItem name="2-2">会员资格</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>订单
          </template>
          <MenuItem name="3-1">库存管理</MenuItem>
          <MenuItem name="3-2">备货/发货</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
</template>

<script>
export default {

}
</script>

<style>

</style>
