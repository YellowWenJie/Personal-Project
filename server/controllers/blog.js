const { exec } = require("../db/mysql");
const { SuccessModel, ErrorModel } = require("../model/resModel");
class BlogController {
  // 添加博客
  static async addBlog(ctx) {
    const user = ctx.state.user;
    console.log("ctx.request.file", ctx.request.file);
    console.log("ctx.file", ctx.file);
    console.log("ctx.request.body", ctx.request.body);
    ctx.body = "done";
  }
}

module.exports = BlogController;
