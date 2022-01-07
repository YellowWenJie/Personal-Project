<template>
  <header>
    <navBar @activeNavigation="activeNavigation" />
    <navGation :GrayBackground="GrayBackground" />
  </header>
</template>

<script>
import navBar from "./navBar";
import navGation from "./navGation";
export default {
  props: ["GrayBackground"],
  components: { navBar, navGation },
  methods: {
    activeNavigation(value) {
      this.$emit("activeNavigation", value);
    },
  },
  mounted() {
    //通知父组件修改背景色
  },
};
</script>

<style lang="less" scoped>
header {
  position: relative;
  height: 100vh;
  background-color: rgb(238, 73, 73);
}
</style>