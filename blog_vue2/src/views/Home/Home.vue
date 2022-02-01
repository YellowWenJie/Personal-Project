<template>
  <div class="home">
    <button @click="getlist">请求</button>
    <h1>{{blogList}}</h1>
    <h1>{{blogLists}}</h1>
  </div>
</template>

<script>
import requests from "../../api/ajax";

// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      blogLists: "123",
    };
  },
  components: {},
  methods: {
    async getlist() {
      this.$store.dispatch("blogList");
      const reqlist = await requests({ url: "blog/blog", method: "get" });
      this.blogLists = reqlist;
      // console.log(reqlist);
      // console.log(blogList);
    },
  },
  computed: {
    ...mapState({
      blogList: (state) => state.home.blogLists,
    }),
  },
};
</script>
