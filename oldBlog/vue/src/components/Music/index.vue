<template>
  <div class="music">
    <div class="player" :class="{play}" @click="plays">
      <svg
        t="1641647038822"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5964"
        width="200"
        height="200"
      >
        <path
          d="M852.5 533.9L279 864.7c-11.9 6.9-27.2 2.8-34.1-9.1-2.2-3.8-3.3-8.1-3.3-12.5V181.5c0-13.8 11.2-24.9 24.9-24.9 4.4 0 8.7 1.2 12.5 3.3l573.4 330.8c11.9 6.9 16 22.1 9.1 34.1-2.1 3.8-5.2 6.9-9 9.1z"
          p-id="5965"
        />
      </svg>
      <svg
        t="1641646446996"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5031"
        width="200"
        height="200"
      >
        <path
          d="M349.866667 149.333333h-14.933334c-21.333333 0-36.266667 14.933333-36.266666 34.133334v654.933333c0 19.2 14.933333 34.133333 34.133333 34.133333h14.933333c19.2 0 34.133333-14.933333 34.133334-34.133333V183.466667c2.133333-19.2-12.8-34.133333-32-34.133334z m341.333333 0h-14.933333c-21.333333 0-36.266667 14.933333-36.266667 34.133334v654.933333c0 19.2 14.933333 34.133333 34.133333 34.133333h14.933334c19.2 0 34.133333-14.933333 34.133333-34.133333V183.466667c2.133333-19.2-12.8-34.133333-32-34.133334z"
          p-id="5032"
        />
      </svg>
    </div>
    <div class="describe"></div>
    <div class="details"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      play: false,
    };
  },
  methods: {
    plays() {
      this.play = !this.play;
    },
  },
};
</script>

<style lang="less" scoped>
.music {
  .player {
    z-index: 8;
    position: fixed;
    bottom: 1%;
    left: 1%;
    background-color: rgb(18, 233, 204);
    width: 80px;
    height: 80px;
    border: 5px solid rgb(255, 255, 255);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    svg {
      width: 60%;
      height: 60%;
      &:first-of-type {
        display: block;
      }
      &:last-of-type {
        display: none;
      }
    }
    &.play {
      svg {
        &:first-of-type {
          display: none;
        }
        &:last-of-type {
          display: block;
        }
      }
    }
  }
  .describe {
    z-index: 7;
    position: fixed;
    bottom: 1%;
    left: -50%;
    width: 200px;
    height: 60px;
    background-color: rgb(250, 248, 248);
    border-radius: 15px;
    border: 1px solid rgb(0, 0, 0);
    transition: all 1s ease;
  }
  .details {
    // z-index: 6;
    // position: fixed;
    // bottom: 8%;
    // left: 3%;
    width: 160px;
    height: 0px;
    // display: none;
    // transition: all 2s;
    // background-color: rgb(250, 248, 248);
  }

  &:hover {
    & .describe {
      left: 1%;

      // animation: describe 1s ease 0s forwards;
    }
    & .details {
      z-index: 6;
      position: fixed;
      bottom: 8%;
      left: 3%;
      width: 160px;
      height: 100px;
      display: block;
      transition: all 2s;
      transition-delay: 0.5s;
      background-color: rgb(250, 248, 248);
      // animation: active 1s ease 0.5s forwards;
    }
    & .player {
      bottom: 2%;
    }
  }
}
// @keyframes active {
//   0% {
//     height: 0px;
//   }
//   100% {
//     height: 100px;
//   }
// }
@media screen and (max-width: 768px) {
  .music {
    .player {
      left: -6%;
    }
    .describe {
      display: none;
    }

    &:hover {
      & .player {
        left: 1%;
      }
      .details {
        display: none;
      }
    }
  }
}
</style>