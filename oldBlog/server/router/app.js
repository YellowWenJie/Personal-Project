const express = require('express')
const app = express()
// 引入处理路径模块
const path = require('path');
// 引入接收二进制 模块
const formidable = require('formidable')
var session =  require('express-session')
//引入接收post参数的模块  req.body 接收
var bodyParser = require('body-parser');
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')),bodyParser.urlencoded({ extended: false }),session({ secret: 'secret key' }));
// 引入home路由


// 文件上传路由
app.post('/upload', function (req,res) {
     // 创建formidable表单解析对象
     var form = new formidable.IncomingForm()
     // 设置客户端文件上传的存储路径
    form.uploadDir = path.join(__dirname, 'public', 'uploads')
     // 保留上传文件的后缀名
     form.keepExtensions = true
     // 解析客户端传递过来的FormData对象
     form.parse(req, (err, fields, files) => {
         if (err) {
             
         }
         res.send({
            success: 1, //0表示上传失败;1表示上传成功
            message:"上传成功",
            url:files['editormd-image-file'].path.replace(/\\/g, "/").split('public')[1]
         })
         
         
     })
})

// 引入home路由
var home = require('./route/home')
// 引入admin路由
var admin = require('./route/admin')
// 为路由匹配请求路径
app.use('/home', home)
app.use('/admin', admin)

app.get('/', (req, res) => {
    // 跳转首页
    res.redirect('/home/index.html');

})
// 监听端口
app.listen(80)  
