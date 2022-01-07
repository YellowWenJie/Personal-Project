<template>
  <div class="navigation" v-bind:class="{ active: isActive }">
    <ul>
      <li>赞助</li>
      <li>支持</li>
      <li>打赏</li>
      <li>{{GrayBackground}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  //接收爷爷组件
  inject: ["GrayBackground"],
  data() {
    return {
      isActive: false,
      GrayBackground: this.GrayBackground,
    };
  },
  mounted() {
    //兄弟传值
    this.$bus.$on("activeNavigation", () => {
      this.isActive = true;
    });
  },
};
</script>

<style lang="less" scoped>
.navigation {
  display: none;
  position: absolute;
  top: 0;
  left: -100vh;
  width: 80%;
  height: 100%;
  background-color: rgb(78, 224, 34);
  transition: 1s;
  // box-shadow: ;
  z-index: 20;
  &.active {
    left: 0;
  }
}
@media screen and (max-width: 768px) {
  .navigation {
    display: block;
  }
}
</style>