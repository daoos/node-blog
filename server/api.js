const models = require('./db');
const express = require('express');
const router = express.Router();

// 注册接口
router.post('/api/login/createAccount',(req,res) => {
    let user = new models.Login({
        username : req.body.username,
        password : req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    user.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('注册成功');
        }
    });
});

// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;