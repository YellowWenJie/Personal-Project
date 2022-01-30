// 导入 bcrypt
var bcrypt = require('bcrypt')
const { connection } = require('../../../model/database')
module.exports = async (req, res) => {
    // 生存随机字符串
    var salt = await bcrypt.genSalt(10)
    // 加密
    var result = await bcrypt.hash(req.body.password, salt)
    var sql = `update user set user = '${req.body.user}' , uname = '${req.body.name}',  password = '${result}' where id = ${req.body.id};`
    connection.query(sql, async (error, reslut) => {
        if (error) {
            res.status(200).send({
                message: '登陆失败', 
            })
            return
        }
        res.status(200).send({
            message: '登陆成功', 
        })
    })
}