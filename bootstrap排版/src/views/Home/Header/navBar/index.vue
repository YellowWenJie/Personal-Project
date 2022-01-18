<template>
  <nav class="container-fluid">
    <div class="row">
      <div class="menu visible-xs col-xs-1">
        <svg
          t="1641479047122"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2282"
          width="200"
          height="200"
        >
          <path
            d="M853.333333 213.333333l0 85.333334-682.666666 0L170.666667 213.333333z"
            fill="#444444"
            p-id="2283"
          />
          <path
            d="M853.333333 469.333333l0 85.333334-682.666666 0L170.666667 469.333333z"
            fill="#444444"
            p-id="2284"
          />
          <path
            d="M853.333333 725.333333l0 85.333334-682.666666 0L170.666667 725.333333z"
            fill="#444444"
            p-id="2285"
          />
        </svg>
      </div>
      <div class="log row col-sm-3 col-xs-7">
        <div class="logImg col-sm-6">
          <img src="../../../../assets/images/IMG_1261.png" />
        </div>
        <span class="col-sm-6">aurora</span>
      </div>
      <div class="option col-sm-6 hidden-xs">
        <ul class="row">
          <li class="col-sm-3">赞助</li>
          <li class="col-sm-3">支持</li>
          <li class="col-sm-3">打赏</li>
          <li class="col-sm-3">ddd</li>
        </ul>
      </div>
      <div class="search col-sm-3 col-xs-4">
        <svg
          t="1641480136071"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8990"
          width="200"
          height="200"
        >
          <path
            d="M441.66 783.66c-44.57 0-88.1-8.23-129.47-24.48-44.12-17.33-83.8-43.06-117.95-76.46-34.14-33.4-60.73-72.51-79.03-116.25-17.66-42.22-26.87-86.93-27.38-132.88s7.73-90.85 24.46-133.45c17.33-44.12 43.06-83.8 76.46-117.95 33.4-34.14 72.51-60.73 116.25-79.03 42.22-17.66 86.93-26.87 132.88-27.38 45.93-0.51 90.85 7.73 133.45 24.46 44.12 17.33 83.8 43.06 117.95 76.46 34.14 33.4 60.73 72.51 79.03 116.24 17.66 42.22 26.87 86.93 27.38 132.88 0.5 45.95-7.73 90.85-24.46 133.45-17.33 44.12-43.06 83.8-76.46 117.95-33.4 34.14-72.51 60.73-116.25 79.03-42.22 17.66-86.93 26.87-132.88 27.38-1.33 0.02-2.65 0.03-3.98 0.03z m0.13-637.83c-73.78 0-147.5 28.49-203.05 85.26-109.52 111.94-107.54 292.12 4.4 401.64 54.23 53.05 125.88 81.8 201.73 80.98 75.86-0.83 146.85-31.15 199.91-85.38 53.05-54.23 81.81-125.87 80.98-201.73s-31.16-146.85-85.38-199.9c-55.17-53.97-126.91-80.87-198.59-80.87z"
            fill="#231815"
            p-id="8991"
          />
          <path
            d="M238.81 529.87c-13.44 0-25.45-9.46-28.18-23.14-9.09-45.46-5.95-93.84 9.07-139.9 14.92-45.74 41.33-88.45 76.38-123.51 11.24-11.24 29.45-11.24 40.69-0.01 11.24 11.23 11.24 29.45 0.01 40.69-58.44 58.46-84.5 137.5-69.72 211.44 3.12 15.58-6.99 30.74-22.57 33.86-1.91 0.39-3.81 0.57-5.68 0.57z"
            fill="#F7B52C"
            p-id="8992"
          />
          <path
            d="M860.4 874.25c-8.82 0-17.64-3.32-24.45-9.97l-178.56-174.7c-13.8-13.5-14.04-35.64-0.54-49.44 13.5-13.8 35.64-14.04 49.44-0.54l178.56 174.7c13.8 13.5 14.04 35.64 0.54 49.44a34.9 34.9 0 0 1-24.99 10.51z"
            fill="#231815"
            p-id="8993"
          />
        </svg>
        <input type="text" placeholder="Search" />
        <div class="bar"></div>
      </div>
    </div>
  </nav>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
export default {};
</script>

<style lang="less" scoped>
nav {
  background-color: rgb(13, 168, 230);
  height: 60px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.5s;
  }
  .row {
    .menu {
      svg {
        width: 20px;
        height: 60px;
      }
    }
    .log {
      height: 60px;
      display: flex;
      align-items: center;

      .logImg {
        width: 45px;
        height: 45px;
        background-color: #fff;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
    .option {
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .row {
        li {
          width: 60px;
          text-align: center;
        }
      }
    }
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      svg {
        width: 20px;
      }
      input {
        width: 80px;
        margin-left: 5px;
        border: none;
        background-color: rgba(255, 255, 255, 0.5);
        &:focus {
          //不会显示边框
          outline: none;
          & ~ .bar:after {
            width: 100%;
          }
        }
      }
      .bar {
        position: relative;
        left: -100px;
        bottom: -15px;
        display: block;
        width: 100px;
      }
      .bar:after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 0.2s ease all;
      }
    }
  }
}
.row {
  margin: 0;

  > .col,
  > [class*="row"],
  > [class*="col-"] {
    padding: 0;
  }
}
</style>