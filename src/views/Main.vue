<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Common-Header/>
      </el-header>
        <Common-Tag/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue';
import CommonTag from '../components/commonTag.vue'
export default {
  components: { CommonAside, CommonHeader,CommonTag },
  name: "VueHome",
  data() {
    return {};
  },

};
</script>

<style lang="less" scoped>
.el-header {
  background-color: black;
}
.el-main {
  padding-top: 0;
}
</style>