const koaJWT = require("koa-jwt");
const { TOKEN_CONF } = require("./index");
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证(这里需要注意，secret必须配置algorithms属性)
module.exports = koaJWT({
  secret: TOKEN_CONF.jwtSecretKey,
  algorithms: ["HS256"],
}).unless({
  path: [/\/reguser/, /\/regEmailUse/],
});
