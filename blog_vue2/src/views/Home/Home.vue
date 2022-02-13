<template>
  <div class="home">
    <goTop />
    <Music />
    <div v-bind:class="{ GrayBackground}" @click="closeNavigation"></div>
    <Header @activeNavigation="activeNavigation" :GrayBackground="GrayBackground" />
    <Main />
  </div>
</template>

<script>
import requests from "../../api/ajax";
// @ is an alias to /src
import { mapState } from "vuex";
import Header from "./Header";
import Main from "./Main";
import Music from "../../components/Music";
import goTop from "../../components/goTop";
export default {
  name: "Home",
  components: { Header, Main, Music, goTop },

  data() {
    return {
      GrayBackground: false,
    };
  },
  methods: {
    activeNavigation(value) {
      this.GrayBackground = value;
    },
    //关闭Navigation
    closeNavigation() {
      this.GrayBackground = false;
    },
  },
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
.GrayBackground {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: 0.5;
}
</style>