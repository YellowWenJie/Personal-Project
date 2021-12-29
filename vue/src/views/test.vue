<template>
  <div id="test">
    <button @click="show = !show">Toggle show</button>
    <transition
      name="bounce"
      appear
      appear-class="bounce-appear-class"
      appear-to-class="bounce-appear-to-class"
      appear-active-class="bounce-appear-active-class"
    >
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bilibili" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxiang" />
          </svg>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import "../assets/iconfont/iconfont";
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
ul {
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: space-around;
  align-items: content;
  li {
    list-style: none;
    font-size: 2em;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 0 10px;
  }
}
.bounce-appear-class {
  transition: all 0.3s ease;
}
.bounce-appear-to-class {
  transform: translateX(10px);
  opacity: 0;
}
// .bounce-appear-active-class {
//   animation: bounce-in 0.5s reverse;
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
</style>