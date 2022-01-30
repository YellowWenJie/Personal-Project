<template>
  <div class="navBar">
    <div class="log">
      <div class="menu" @click="menu">
        <svg
          t="1641455252136"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4165"
          width="200"
          height="200"
        >
          <path
            d="M130.735 253.626m-66.735 0a66.735 66.735 0 1 0 133.47 0 66.735 66.735 0 1 0-133.47 0Z"
            fill="#FF3B30"
            p-id="4166"
          />
          <path
            d="M130.735 503.434m-66.735 0a66.735 66.735 0 1 0 133.47 0 66.735 66.735 0 1 0-133.47 0Z"
            fill="#FF3B30"
            p-id="4167"
          />
          <path
            d="M130.735 770.374m-66.735 0a66.735 66.735 0 1 0 133.47 0 66.735 66.735 0 1 0-133.47 0Z"
            fill="#FF3B30"
            p-id="4168"
          />
          <path
            d="M913.385 283.49H351.807c-16.494 0-29.867-13.373-29.867-29.867s13.373-29.867 29.867-29.867h561.578c16.494 0 29.867 13.373 29.867 29.867s-13.373 29.867-29.867 29.867zM913.385 533.304H351.807c-16.494 0-29.867-13.373-29.867-29.867s13.373-29.867 29.867-29.867h561.578c16.494 0 29.867 13.373 29.867 29.867 0 16.493-13.373 29.867-29.867 29.867zM930.133 800.238H368.564c-16.494 0-29.867-13.373-29.867-29.867s13.373-29.867 29.867-29.867h561.569c16.494 0 29.867 13.373 29.867 29.867s-13.373 29.867-29.867 29.867z"
            fill="#0DB14B"
            p-id="4169"
          />
        </svg>
      </div>
      <div class="logImg">
        <img src="../../assets/img/IMG_1261.png" alt />
      </div>
      <span>YellowWenJie</span>
    </div>
    <div class="option" v-bind:class="{ active: isActive }">
      <ul>
        <li>赞助</li>
        <li>支持</li>
        <li>打赏</li>
        <li>***</li>
      </ul>
      <input type="text" placeholder="搜索" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    menu() {
      this.isActive = true;
      //通知兄弟组件navigation打开菜单栏
      this.$bus.$emit("activeNavigation");
      //通知父组件修改背景色
      this.$emit("activeNavigation", this.isActive);
    },
  },
};
</script>

<style lang="less" scoped>
.navBar {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: yellow;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //透明度
  background-color: rgba(1);
  transition: 0.5s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.5s;
  }
  .log {
    display: flex;
    align-items: center;
    .menu {
      display: none;
    }
    .logImg {
      width: 45px;
      height: 45px;
      margin-left: 25px;
      background-color: #fff;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    span {
      user-select: none;
      margin-left: 10px;
      font-size: 1.5em;
    }
  }
  .option {
    display: flex;
    margin-right: 20px;
    ul {
      display: flex;
      li {
        list-style: none;
        user-select: none;
        margin-right: 20px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .navBar {
    .option {
      ul {
        li {
          display: none;
        }
      }
    }
    .log {
      .menu {
        margin-left: 20px;
        display: block;
        width: 30px;
        .icon {
          width: 100%;
        }
      }
    }
  }
}
</style>