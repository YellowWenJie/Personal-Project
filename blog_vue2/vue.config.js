module.exports = {
  //关闭exlint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      "/": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true //是否跨域
        // pathRewrite: { "^/api": "" }
      }
    }
  },
  // Pug
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-html-loader")
      .loader("pug-html-loader")
      .end();
  }
};
