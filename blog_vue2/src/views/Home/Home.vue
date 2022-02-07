<template>
  <div class="home"></div>
</template>

<script>
import requests from "../../api/ajax";
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // 获取所有博客信息
    // this.$store.dispatch("blogList");
  },
  computed: {
    ...mapState({
      // blogList: (state) => state.home.blogList,
    }),
  },
};
</script>
<style lang="less"scoped>
</style>