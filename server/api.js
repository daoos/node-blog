const models = require('./db');
const express = require('express');
const router = express.Router();

// 注册接口
router.post('/api/register',(req,res) => {
  let account = new models.Account({
    username : req.body.username,
    password : req.body.password
  });
  // 保存账号数据进mongoDB
  account.save((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('注册成功');
    }
  });
});

// 登录接口
router.post('/api/login', (req,res) => {
  let account = {
    username: req.body.username,
    password: req.body.password
  }
  console.log(account)
  // 通过模型去查找数据库
  models.Account.findOne(account, (err, data) => {
    if (!data) {
      res.send({result: 0})
    } else {
      res.send(Object.assign({}, {result: 1}, account))
    }
  });
});

module.exports = router;