<template>
  <div>
    test
    <button @click="lists">123</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "",
    };
  },
  methods: {
    lists() {
      let data = this.$axios.get("/list");
      this.list = data;
      console.log(this.list);
    },
  },
};
</script>