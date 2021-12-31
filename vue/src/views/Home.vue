<template>
  <div class="home">
    <header>
      <a href="#" class="login" v-bind:class="{ active: isActive1 }" @click="login">login</a>
      <div class="righSide">
        <!-- <div class="btns dayNight" v-bind:class="{ active: isActive }" @click="dayNight">
          <ios-moon-icon class="icon" />
          <ios-sunny-icon class="icon" />
        </div>-->
        <div
          class="btns menuToggle"
          v-if="!isActive1"
          v-bind:class="{ active: isActive1 }"
          @click="menuToggle"
        >
          <MdCloseIcon class="icon" />
          <MdMenuIcon class="icon" />
        </div>
      </div>
    </header>
    <section class="main">
      <video
        src="../assets/video/gsd.mp4"
        poster="../assets/img/2~A7Y1C}OLB3{M~O96X51DY.5ffb122c.png"
        autoplay
        loop
        muted
        type="mp4"
      ></video>
      <!-- <img src="../assets/imgs/IMG_1261.png" alt class="mask" /> -->
      <h2 @click="hellows">{{hellow}}</h2>
      <!-- <p class="copyrightText">123456789</p> -->
      <ul class="sci">
        <li>
          <a href="https://github.com/YellowWenJie">
            <LogoGithubIcon />
          </a>
        </li>
      </ul>
    </section>
    <!-- 导航栏 -->
    <ul class="navigation" v-bind:class="{ active: isActive1 }">
      <li>
        <a href="#">
          <router-link to="/index">首页</router-link>
        </a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Package</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LogoGithubIcon from "vue-ionicons/dist/logo-github.vue";
import MdCloseIcon from "vue-ionicons/dist/md-close.vue";
import MdMenuIcon from "vue-ionicons/dist/md-menu.vue";
export default {
  name: "Home",
  components: {
    LogoGithubIcon,
    MdCloseIcon,
    MdMenuIcon,
  },
  data() {
    return {
      hellow: "欢迎！！！",
      isActive: true,
      isActive1: true,
    };
  },
  methods: {
    login() {
      this.isActive1 = false;
    },
    dayNight() {
      this.isActive = !this.isActive;
    },
    menuToggle() {
      this.isActive1 = !this.isActive1;
    },
    hellows() {
      this.isActive1 = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~vue-ionicons/ionicons.less";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "POppins", sans-serif;
}
header {
  position: absolute;
  width: 100%;
  padding: 40px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  .login {
    /* 在 web 浏览器中，如果您在文本上双击，文本会被选取或高亮显示。此属性用于阻止这种行为 */
    user-select: none;
    position: relative;
    display: inline-flex;
    // color: var(--black);
    color: #333;
    //删除下划线
    text-decoration: none;
    font-size: 2em;
    font-weight: 0.05em;
    letter-spacing: 0.05em;
    /* 小写变大写 */
    text-transform: uppercase;
    &.active {
      color: #fff;
    }
  }
  .righSide {
    display: flex;
    .btns {
      position: relative;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      /* 手指光标 */
      cursor: pointer;
      margin-left: 10px;
      .icon {
        font-size: 1.5em;

        // color: var(--black);
        &:nth-child(1) {
          display: block;
        }
        &:nth-child(2) {
          display: none;
        }
      }
      &.active {
        .icon {
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(1) {
            display: none;
          }
        }
      }
    }
  }
}

.main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度 */
    object-fit: cover;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    /* 在 web 浏览器中，如果您在文本上双击，文本会被选取或高亮显示。此属性用于阻止这种行为 */
    user-select: none;
    /* mix-blend-mode控制背景部分透明 */
    // mix-blend-mode: screen;
    .dark {
      filter: invert(1);
      mix-blend-mode: multiply;
    }
  }
  h2 {
    position: relative;
    z-index: 2;
    font-size: 16vw;
    color: #fff;
    text-shadow: 0 20px 30px rbga(0, 0, 0, 0.2);
  }
  .copyrightText {
    position: absolute;
    left: 100px;
    bottom: 20px;
    z-index: 4;
    font-weight: 500;
    font-size: 1.2em;
    color: var(--black);
  }
  .sci {
    position: absolute;
    right: 100px;
    bottom: 40px;
    z-index: 5;
    display: flex;
    flex-direction: column;
  }
  .sci li {
    list-style: none;
  }
  .sci li a {
    text-decoration: none;
    color: var(--black);
    font-size: 1.75em;
  }
}

// 导航栏
.navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--white);
  z-index: 4;
  transition: 0.5s;
  &.active {
    left: -100%;
  }
  li {
    list-style: none;
    a {
      display: inline-flex;
      margin: 5px 0;
      font-size: 1.35em;
      text-decoration: none;
      color: var(--black);
      padding: 5px 10px;
      border-radius: 40px;
      &:hover {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }
}

@media (max-width: 768px) {
  header {
    padding: 20px;
  }
  .copyrightText {
    left: 20px;
    bottom: 30px;
  }
  .sci {
    right: 20px;
    bottom: 20px;
  }
}
</style>