const Router = require("koa-router");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const router = new Router({ prefix: "/blog" });
router.get("/blog", ctx => {
  ctx.body = new SuccessModel(ctx.host);
});
module.exports = router;
