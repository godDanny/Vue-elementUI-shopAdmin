<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-contact"></Icon>Admin
            </MenuItem>
            <!-- <MenuItem name="2">
              <Icon type="md-contacts"></Icon>Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>Item 4
            </MenuItem>-->
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="md-cart"></Icon>商品
              </template>
              <MenuItem name="1-1">商品管理</MenuItem>
              <MenuItem name="1-2">商品目录管理</MenuItem>
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
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">Content</Content>
        </Layout>
      </Layout>
    </Layout>
  </div>

  <!-- <Icon type="md-cart"></Icon>购物商城 -->
  <!-- <Icon type="md-contacts"></Icon>会员管理 -->
  <!-- // <Icon type="ios-analytics"></Icon>订单管理 -->
</template>


<script>
export default {};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
}
body .layout {
  width: 100%;
  height: 100%;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 100px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
