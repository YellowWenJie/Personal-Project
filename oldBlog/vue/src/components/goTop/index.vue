<template>
  <div class="gotop">
    <button @click="gotop">返回顶部</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    gotop() {
      // document.documentElement.scrollTop = 0;
      window.scrollBy({
        left: 0,
        top: -1000,
        // 平滑滚动
        behavior: "smooth",
      });
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.gotop {
  z-index: 8;
  position: fixed;
  top: 100px;
  right: 50px;
  background-color: #fff;
}
@media screen and (max-width: 768px) {
  .gotop {
    display: none;
  }
}
</style>