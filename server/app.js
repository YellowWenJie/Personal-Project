const Koa = require("koa");
const app = new Koa();
// const views = require('koa-views')
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const { SuccessModel, ErrorModel } = require("./model/resModel");

const cors = require("koa-cors");

const user = require("./routes/user");
const blog = require("./routes/blog");

// error handler
onerror(app);

// middlewares
// 处理 post 请求
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

// 设置跨域
app.use(cors());
// logger 日志
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// 导入配置文件
const { TOKEN_CONF } = require("./config/index");
//一定要在路由之前配置解析Token的中间件
const koaJWT = require("koa-jwt");
// 身份认证错误中间件
app.use(async (ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      // 自定义返回结果
      ctx.body = new ErrorModel(
        "身份认证失败，在 Authorization 中添加 token 信息"
      );
    } else {
      throw err;
    }
  });
});

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证(这里需要注意，secret必须配置algorithms属性)
// app.use(
//   koaJWT({ secret: TOKEN_CONF.jwtSecretKey, algorithms: ["HS256"] }).unless({
//     path: [/^\/api\//]
//   })
// );

// routes
app.use(user.routes(), user.allowedMethods());
app.use(blog.routes(), blog.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err.name);
});

module.exports = app;
