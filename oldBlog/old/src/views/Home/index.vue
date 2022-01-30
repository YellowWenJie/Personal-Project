<template>
  <div class="home">
    <!-- <div v-bind:class="{ GrayBackground}" @click="closeNavigation"></div> -->
    <Header @activeNavigation="activeNavigation" />
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "home",
  provide() {
    //给后代传值
    return {
      GrayBackground: this.GrayBackground,
    };
  },
  data() {
    return {
      GrayBackground: false,
    };
  },
  components: { Header },
  methods: {
    activeNavigation(value) {
      console.log("爷", value);
      this.GrayBackground = value;
    },
    //关闭Navigation
    closeNavigation() {
      this.GrayBackground = true;
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