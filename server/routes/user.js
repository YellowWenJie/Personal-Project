const Router = require("koa-router");
const { regUser, login, regEmailUser } = require("../controllers/user");
const schema = require("../model/schema");
// 导入 Joi 来定义验证规则
const { user, email } = require("../schema/user");
// const upload = require("../model/upload");
const router = new Router({ prefix: "/user" });

// 普通注册
router.post("/reguser", schema("post", user), regUser);
// 邮箱注册
router.post("/regEmailUser", schema("post", email), regEmailUser);
// 上传头像
// router.post("/upload", upload.single("avatar"), ctx => {
//   console.log("ctx.request.file", ctx.request.file);
//   console.log("ctx.file", ctx.file.path);
//   console.log("ctx.request.body", ctx.request.body);
//   ctx.body = "done";
// });
// 登录
router.post("/login", schema("post", user), login);
module.exports = router;
