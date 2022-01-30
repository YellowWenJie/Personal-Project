<template>
  <div class="home">
    <Music />
    <div v-bind:class="{ GrayBackground}" @click="closeNavigation"></div>
    <Header @activeNavigation="activeNavigation" :GrayBackground="GrayBackground" />
    <div>123</div>
  </div>
</template>

<script>
import Header from "./Header";
import Music from "../../components/Music";
export default {
  name: "Home",
  components: { Header, Music },
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
};
</script>
<style lang="less" scoped>
.GrayBackground {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: 0.5;
}
</style>