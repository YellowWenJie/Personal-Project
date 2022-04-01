const Router = require("koa-router");
const { regUser, blogList, login } = require("../controllers/user");
const schema = require("../model/schema");
// 导入 Joi 来定义验证规则
const { user } = require("../schema/user");
// const upload = require("../model/upload");
const router = new Router({ prefix: "/api/user" });
// 查询博客信息
router.get("/bloglist", blogList);
// 注册
router.post("/reguser", schema("post", user), regUser);
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
