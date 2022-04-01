const bcrypt = require("bcryptjs");
// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken");
const { exec } = require("../db/mysql");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { NAME_CONF, TOKEN_CONF } = require("../config/index");
class UserController {
  // 查询博客信息
  static async blogList(ctx) {
    const author = ctx.query.author;
    const keyword = ctx.query.keyword;
    console.log(ctx.query);
    let sql = `select * from blogs where 1=1 `;
    if (author) {
      sql += `and author='${author}'`;
    }
    if (keyword) {
      sql += `and title like '%${keyword}%'`;
    }
    sql += `order by createtime desc;`;
    // 返回 promise
    await exec(sql)
      .then(data => {
        if (data.length == 0) {
          ctx.body = new ErrorModel("未找到");
        } else {
          ctx.body = new SuccessModel(data);
        }
      })
      .catch(err => {
        ctx.body = new ErrorModel(err);
      });
  }
  // 注册
  static async regUser(ctx) {
    const userinfo = ctx.request.body;
    const username = userinfo.username;
    const sqlStr = `select username from users where username='${username}'`;
    let dataBaseName = await exec(sqlStr);
    if (dataBaseName.length > 0) {
      ctx.body = new ErrorModel("用户名重复，重新取个名字吧");
      return;
    }
    //调用bcrypt.hashSync(需要加密的值，10)10代表加密的程度对密码进行加密
    const password = bcrypt.hashSync(userinfo.password, 10);
    let realname = userinfo.realname;
    let random = Math.random();
    if (!realname) {
      realname = NAME_CONF + "_" + Math.floor(random * 1000000);
    }
    // let randomly = Math.floor(random * 10) < 5 ? ".png" : ".webp";
    let randomly = require("../model/readFile");
    let avatar = "/img/avatar/" + randomly();

    const sql = `insert into users(username,password,realname,avatar) values ('${username}','${password}','${realname}','${avatar}')`;
    await exec(sql).then(result => {
      if (result.length < 1) {
        ctx.body = new ErrorModel("注册失败");
      } else {
        ctx.body = new SuccessModel("注册成功");
      }
    });
  }
  // 登录
  static async login(ctx) {
    // 获取表单数据
    const userinfo = ctx.request.body;
    let username = userinfo.username;
    const sqlStr = `select * from users where username='${username}'`;
    let dataBase = await exec(sqlStr);
    if (dataBase.length < 1) {
      ctx.body = new ErrorModel("登录失败，未注册");
      return;
    }
    // 拿着用户输入的密码,和数据库中存储的密码进行对比，调用 bcrypt.compareSync(用户提交的密码, 数据库中的密码) 方法比较密码是否一致
    const compareResult = bcrypt.compareSync(
      userinfo.password,
      dataBase[0].password
    );
    if (!compareResult) {
      ctx.body = new ErrorModel("登陆失败,密码不正确");
      return;
    }
    // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
    const user = { ...dataBase[0], password: "" };
    //对用户的信息进行加密，生成token字符串jwj.sign（加密的对象，加密使用到SecretKey的值）
    const tokenStr = jwt.sign(user, TOKEN_CONF.jwtSecretKey, {
      expiresIn: TOKEN_CONF.expiresIn
    });
    ctx.body = new SuccessModel("Bearer " + tokenStr);
  }
}

module.exports = UserController;
