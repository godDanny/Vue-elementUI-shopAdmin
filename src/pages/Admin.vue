
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <div class="logo">LOGO</div>
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
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <!-- 返回上一页 -->
        <Menu mode="horizontal" theme active-name="1" width="auto">
          <div class="go-back">
            <MenuItem name="1">
              <Icon type="md-arrow-back"></Icon>Backward
            </MenuItem>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-contact"></Icon>Admin
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <!-- 面包屑导航 -->
        <Breadcrumb separator=">" :style="{margin: '20px 0 20px 20px'}">
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>

        <!-- 添加/删除/选择/搜索 -->
        <template>
          <div class="action-nav">
            <div class="add-del">
              <Button type="success" class="add-item">Addtion</Button>
              <Button type="error" class="del-item">Delete</Button>
            </div>
            <div class="nav-right">
              <Select v-model="model1" style="width:200px" class="nav-select">
                <Option
                  v-for="item in cityList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</Option>
              </Select>
              <Input
                class="input-serch"
                suffix="ios-search"
                placeholder="请输入会员名"
                style="width: auto"
              />
            </div>
          </div>
        </template>
        <!-- 商品信息卡片 -->
        <Card>
          <div style="height: 350px">
            <template>
              <Table border ref="selection" :columns="columns7" :data="data6"></Table>
            </template>
          </div>
        </Card>
      </Content>

      <!-- 分页器 -->
      <div class="paging">
        <template>
          <Page :total="40" size="small" show-elevator show-sizer/>
        </template>
      </div>
    </Layout>
  </div>
</template>


<script>
// import aside from "./components/Aside.vue";
export default {
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        }
      ],

      columns7: [
        {
          type: "selection",
          width: 60,
          align: "center",
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [
              h("Icon", {
                props: {
                  type: "person"
                }
              }),
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Orders",
          width: 80,
          key: "number"
        },
        {
          title: "Account",
          width: 140,
          key: "name"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Express",
          key: "express",
          width: 120
        },
        {
          title: "Status",
          key: "status",
          width: 100
        },
        {
          title: "Action",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      data6: [
        {
          number: "1",
          name: "John Brown",
          address: "New York No. 1 Lake Park",
          express: "SF express",
          status: "unpaid"
        },
        {
          number: "2",
          name: "John Brown",
          address: "New York No. 1 Lake Park",
          express: "YUNDA",
          status: "paid"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Orders：${this.data6[index].number}<br>
                    Account：${this.data6[index].name}<br>
                    Address：${this.data6[index].address}<br>
                    Express：${this.data6[index].express}<br>
                    status：${this.data6[index].status}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    // 全选/全不选
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
};
</script>


<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
/* 品牌 */
.layout .logo {
  height: 64px;
  background-color: red;
  text-align: center;
  line-height: 64px;
}

/* 返回上一页 */
.layout .go-back {
  margin-left: -5px;
  font-size: 0px;
  font-size: 20px;
}
.layout-nav {
  width: 200px;
  margin: 0 auto;
  margin-right: -60px;
}

/* 新增/删除 */
.action-nav {
  width: 872px;
  margin: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: Center;
}
.action-nav .add-del {
  display: flex;
  float: left;
  background-color: inherit;
  /* width:400px; */
  margin-right: 280px;
}
.add-del .del-item {
  margin-left: 20px;
}
.nav-right {
  float: left;
  margin-right: 0;
}
.nav-right .nav-select {
  margin-right: 40px;
}

/* 分页器 */
.paging {
  margin: 20px 0 36px 40px;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>