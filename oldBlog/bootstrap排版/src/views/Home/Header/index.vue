<template>
  <header>
    <navBar />
    <!-- <navGation /> -->
  </header>
</template>

<script>
import navBar from "./navBar";
import navGation from "./navGation";
export default {
  components: { navBar, navGation },
};
</script>


<style lang="less" scoped>
header {
  height: 100vh;
  background-color: rgb(28, 209, 22);
}
</style>