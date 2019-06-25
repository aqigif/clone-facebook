const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const md5 = require('md5');
const bcrypt = require('bcryptjs')

// GET users listing.
router.get('/get', async function (req, res, next) {
  const users = await model.users.findAll({});
  jwt.sign({users:users.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
})
// GET users ID listing.
router.get('/get/:id', async function (req, res, next) {
  const users = await model.users.findOne({
    where:{id: req.params.id}
  });
  jwt.sign({users:users.id},'secretkey',(err,token)=>{
    res.status(201).json({token});  
  });
});
// CREATE
router.post('/register', verifyToken, async function (req, res, next) {
  const {
    name,email,avatar,
    username,password,
    phoneNumber,gender
  } = req.body;
  const users = await model.users.create({
    name,email,
    avatar,username,
    password :md5(password),
    phoneNumber,gender
  });
  jwt.sign({users:users.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
});

//UPDATE
router.patch('/update/:id', async function (req, res, next) {
  const usersId = req.params.id;
  const {
    name,email,avatar,
    username,password,
    phoneNumber,gender
  } = req.body;
  const users = await model.users.update({
    name,email,
    avatar,username,
    password :md5(password),
    phoneNumber,gender
  }, {where: {id: usersId}
  });
  jwt.sign({users:users.id},'secretkey',(err,token)=>{
      res.status(201).json({token});
  });
}); 
//delete
router.delete('/delete/:id', async function (req, res, next) {
  const usersId = req.params.id;
  const users = await model.users.destroy({ where: {id: usersId}})
  jwt.sign({users:users.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
});

// authentikasi
router.post('/login',verifyToken, async function (req, res, next) {
  let{username,password}= req.body;
  const users = await model.users.findOne({where:{username:username}});
  if (users) {
    const validpassword = md5(password)
    if(validpassword){
      jwt.sign({id:users.id},'secretkey',(err,token)=>{
        res.status(201).json({token});
      });
    }
  }
 });

//middleware
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    //get Token
    const bearerToken = bearer[1]
    //Set Token
    req.token = bearerToken
    //next middleware
    next()
    
  } else {
    res.sendStatus(403)
  }
}

module.exports = router;