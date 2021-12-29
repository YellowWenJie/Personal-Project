<template>
  <div id="index">
    <header>
      <nav>
        <div class="log">
          <div class="img">
            <img src="../assets/img/IMG_1261.png" alt />
          </div>
          <span>YellowWenJie</span>
        </div>
        <div class="navBar">
          <ul>
            <li>赞助</li>
            <li>支持</li>
            <li>打赏</li>
            <li>***</li>
          </ul>
          <input type="text" placeholder="搜索" />
        </div>
      </nav>
      <video
        src="../assets/video/鬼杀队_x264.mp4"
        poster="../assets/img/2~A7Y1C}OLB3{M~O96X51DY.5ffb122c.png"
        autoplay
        loop
        muted
        type="mp4"
      ></video>
      <div class="appear">
        <h1>YellowWenJie</h1>
        <div class="contact">
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
        </div>
      </div>
    </header>
    <aside>123</aside>
    <nav>123</nav>
    <footer>123</footer>
  </div>
</template>

<script>
import "../assets/iconfont/iconfont";
export default {
  data() {
    return {
      load: false,
    };
  },
  components: {},
  methods: {},
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
header {
  position: relative;
  height: 100vh;
  transition: 2s;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度 */
    object-fit: cover;
    z-index: 0;
  }
  nav {
    position: fixed;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //透明度
    background-color: rgba(1);
    transition: 0.5s;
    z-index: 10;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      transition: 0.5s;
    }
    .log {
      opacity: 1;
      display: flex;
      align-items: center;
      .img {
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
    .navBar {
      display: flex;
      margin-right: 20px;
      ul {
        display: flex;
        li {
          list-style: none;
          margin-right: 20px;
        }
      }
    }
  }
  .appear {
    // background-color: rgb(15, 185, 236);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    h1 {
      position: relative;
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      z-index: 1;
    }
    .contact {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
        li {
          position: relative;
          list-style: none;
          font-size: 2em;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 0 10px;
          top: 300px;
          #li() {
            animation-name: li1;
            animation-timing-function: ease;
            animation-duration: 0.8s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
          &:nth-child(1) {
            #li();
            animation-delay: 0s;
          }
          &:nth-child(2) {
            #li();
            animation-delay: 0.3s;
          }
          &:nth-child(3) {
            #li();
            animation-delay: 0.6s;
          }
          &:nth-child(4) {
            #li();
            animation-delay: 0.9s;
          }
          &:nth-child(5) {
            #li();
            animation-delay: 1.2s;
          }
        }
      }
    }
  }
}
@keyframes li1 {
  0% {
    top: 200px;
  }
  100% {
    top: 0;
  }
}
</style>