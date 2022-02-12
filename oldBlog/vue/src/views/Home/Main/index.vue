<template>
  <main>
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
    <div class="card">4</div>
  </main>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    a() {
      window.open(
        "http://localhost:8080",
        "wroxWindow",
        "height=1000,width=800,location=no,Menubar=yes,resizable=no,status=no,toolbar=no,scrollbars=no"
      );
    },
    scrollIntoView() {
      document.querySelectorAll(".card")[0].scrollIntoView(true);
    },
  },

  computed: {},
  mounted() {
    this.scrollIntoView();
  },
};
</script>
<style lang='less' scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    margin: 20px;
    width: 50%;
    height: 150px;
    background-color: rgb(15, 231, 80);
    border: 1px solid red;
  }
}
</style>