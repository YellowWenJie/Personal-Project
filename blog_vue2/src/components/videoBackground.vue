<template>
  <div class="videoBackground">
    <video autoplay loop muted type="mp4" @canplay="canplay">
      <source :src="src2" type="video/mp4" />
      <source src="../assets/IMG/aotm.png" type="video/mp4" />
    </video>
    <div class="vedioCanPlay" v-if="vedioCanPlay">
      <img ref="img" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: ["bgOnOff"],
  data() {
    return {
      vedioCanPlay: true,
      src1: require("@/assets/IMG/aotm.png"),
      src2: require("@/assets/MP4/gmzr.mp4"),
    };
  },
  methods: {
    canplay() {
      this.vedioCanPlay = false;
    },
    getImg() {
      this.$refs.img.src = this.src1;
    },
  },
  mounted() {
    this.getImg();
  },
};
</script>
<style lang="less" scoped>
.videoBackground {
  z-index: -100;
  position: relative;
  width: 100%;
  min-height: 100vh;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度 */
    object-fit: cover;
  }
  .vedioCanPlay {
    // z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      /* object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度 */
      object-fit: cover;
    }
  }
}
</style>