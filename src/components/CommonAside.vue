<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
  <h3>{{isCollapse?'后台':'通用后台管理系统'}}</h3>
    <el-menu-item
    @click="clickMenu(item)"
      v-for="item in noChildren"
      :key="item.path"
      :index="item.path+''"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.path+''">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group v-for="(subItem,sunIndex) in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="sunIndex.toString()">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      //控制菜单栏是否默认展开,后续通过计算属性设置
      // isCollapse: false,
      menu: [
        // {
        //   path: "/",
        //   name: "Home",
        //   label: "首页",
        //   icon: "s-home",
        //   url: "Home/Home",
        // },
        // {
        //   path: "/Mall",
        //   name: "Mall",
        //   label: "商品管理",
        //   icon: "video-play",
        //   url: "MallManage/MallManage",
        // },
        // {
        //   path: "/User",
        //   name: "User",
        //   label: "用户管理",
        //   icon: "user",
        //   url: "UserManage/UserManage",
        // },
        // {
        //   label: "其他",
        //   icon: "location",
        //   children: [
        //     {
        //       path: "/Page1",
        //       name: "Page1",
        //       label: "页面1",
        //       icon: "seeting",
        //       url: "Other/PageOne",
        //     },
        //     {
        //       path: "/Page2",
        //       name: "Page2",
        //       label: "页面2",
        //       icon: "setting",
        //       url: "Other/PageTwo",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
        this.$router.push({
            name:item.name
        })
        this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    //通过filter方法筛选出没有子项目的menu
    noChildren() {
      const test=this.asynMenu.filter((item) => !item.children);
      console.log(test)
      return test
    },
    hasChildren() {
      return this.asynMenu.filter((item) => item.children);
    },
    isCollapse(){
      // console.log(this.$store.state)
      return this.$store.state.tab.isCollapse
    },
    asynMenu(){
       return this.$store.state.tab.menu
    }
  },
};
</script>
<style  lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    height: 100%;
    border: none;
    h3{
        color: #fff;
        text-align:center;
        line-heigit:48px
    }
}
</style>

