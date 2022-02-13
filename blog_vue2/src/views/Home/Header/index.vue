<template>
  <header ref="header">
    <navBar @activeNavigation="activeNavigation" />
    <headerCenter :headerHeight="headerHeight" />
    <navGation :GrayBackground="GrayBackground" />
  </header>
</template>

<script>
import navBar from "./navBar";
import navGation from "./navGation";
import headerCenter from "./headerCenter";
export default {
  props: ["GrayBackground"],
  components: { navBar, navGation, headerCenter },
  data() {
    return {
      headerHeight: "",
    };
  },
  methods: {
    activeNavigation(value) {
      this.$emit("activeNavigation", value);
    },
    // handleScroll(e) {
    //   this.headerHeight = this.$refs.header.offsetHeight;
    // },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
};
</script>

<style lang="less" scoped>
header {
  position: relative;
  height: 100vh;
}
</style>