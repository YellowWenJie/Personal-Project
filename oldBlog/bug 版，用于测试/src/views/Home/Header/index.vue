<template>
  <div class="header">
    <navBar @activeNavigation="activeNavigation" />
    <navigation />
  </div>
</template>

<script>
import navBar from "../../../components/navBar";
import navigation from "../../../components/navigation";
export default {
  components: { navBar, navigation },
  methods: {
    activeNavigation(value) {
      console.log("父", value);
      this.$emit("activeNavigation", value);
    },
  },
  mounted() {
    //通知父组件修改背景色
  },
};
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  // width: 100vw;
  height: 100vh;
  background-color: rgb(177, 238, 9);
}
</style>