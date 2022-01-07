# vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration


# 黄文杰的个人博客

### 一、数据表

user

|  id  | username | password | nickName | email | user_pic |
| :--: | :------: | :------: | :------: | :---: | :------: |
|      |  账号名  |   密码   |   名字   | 邮箱  | 用户头像 |

### 二、原型设计

1. 首页基本排版

### 三、功能记录

1. 点击显示输入框并自动移入光标

```javascript
 <input ref="inputVal" type="text" placeholder="搜索" @blur="inputBlur" />
 //光标移入
  setTimeout(() => {
        this.$refs.inputVal.focus();
      }, 500);
 //光标消失监听事件
  inputBlur() {
      this.clickSearch = false;
    },
```

