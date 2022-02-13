<template>
  <div class="login">
    <videoBackground />
    <loginCard />
  </div>
</template>

<script>
// @ is an alias to /src
import videoBackground from "../../../components/videoBackground/videoBackground.vue";
import loginCard from "../../../components/loginCard/loginCard.vue";
export default {
  name: "login",
  data() {
    return {};
  },
  components: { videoBackground, loginCard },
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style lang="less"scoped>
</style>