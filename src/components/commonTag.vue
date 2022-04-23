<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'Home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="samll"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      //解构closeTag方法，命名为close
      close: "closeTag",
    }),
    //面包屑切换
    changeMenu(item) {
      console.log("页面名称",item.name)
      this.$router.push({
        name: item.name,
      });
    },
    //面包屑删除
    handleClose(tag, index) {
      //获取当前tag长度
      const length = this.tags.length - 1;
      this.close(tag);
      //console.log(length)
      if (tag.name !== this.$route.name) {
        return;
      } else if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
        console.log("index:", index, "length:", length);
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
        console.log("index:", index, "length:", length);
      }
    },
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList,
    }),
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>