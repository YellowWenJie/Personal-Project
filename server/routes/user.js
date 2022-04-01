const Router = require("koa-router");
const {
  regUser,
  login,
  regEmailUser,
  updateUser,
} = require("../controllers/user");
const schema = require("../model/schema");
// 导入 Joi 来定义验证规则
const { user, email } = require("../schema/user");
const uploads = require("../model/upload");
const router = new Router({ prefix: "/user" });

// 普通注册
router.post("/reguser", schema("post", user), regUser);
// 邮箱注册
router.post("/regEmailUser", schema("post", email), regEmailUser);

// 普通登录
router.post("/login", schema("post", user), login);

// 更新用户基本信息
router.post("/updateUser", uploads("avatar", "avatar"), updateUser);

module.exports = router;
