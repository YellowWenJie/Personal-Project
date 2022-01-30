<template>
  <div>
    <h1 class="title">Hover over the cards</h1>
    <div class="container">
      <card
        data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">
          <router-link to="/blogIndex" :style="skip">Home</router-link>
        </h1>

        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Beaches</h1>

        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Trees</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Lakes</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
export default {
  components: { card },
  data() {
    return {
      skip: {
        color: "#fff",
        textDecoration: "none",
      },
    };
  },
};
</script>

<style lang="less" s>
@hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
@returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #bcaaa4;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d373d;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}

.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>