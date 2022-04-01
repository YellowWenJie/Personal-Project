const Router = require("koa-router");
const { addBlog } = require("../controllers/blog");
const uploads = require("../model/upload");
const router = new Router({ prefix: "/blog" });
// 添加博客
router.post("/add", uploads("avatar", "blogcover"), addBlog);
module.exports = router;
