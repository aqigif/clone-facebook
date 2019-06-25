const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const md5 = require('md5');
const bcrypt = require('bcryptjs')

// GET posts listing.
router.get('/get', async function (req, res, next) {
  const posts = await model.posts.findAll({include: ['users']});
  jwt.sign({posts:posts.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
});


// GET post ID listing.
router.get('/get/:id', async function (req, res, next) {
  const postId = req.params.id;
  const posts = await model.posts.findByPk(postId, {include: ['users']});
  jwt.sign({posts:posts.id},'secretkey',(err,token)=>{
      res.status(201).json({token});
  });
});
// CREATE
router.post('/create', async function (req, res, next) {
  const {
    usersId,feed,
    imgPost,react,
    comment,share
  } = req.body;
  const posts = await model.posts.create({
    usersId,feed,
    imgPost,react,
    comment,share
  });
  jwt.sign({posts:posts.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
});

//UPDATE
router.patch('/update/:id', async function (req, res, next) {
  const postId = req.params.id;
  const {
    usersId,feed,
    imgPost,react,
    comment,share
  } = req.body;
  const posts = await model.posts.update({
    usersId,feed,
    imgPost,react,
    comment,share
  }, {where: {id: postId}
  });
  jwt.sign({posts:posts.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
}); 
//delete
router.delete('/delete/:id', async function (req, res, next) {
  const postId = req.params.id;
  const posts = await model.posts.destroy({ where: {id: postId}})
  jwt.sign({posts:posts.id},'secretkey',(err,token)=>{
    res.status(201).json({token});
  });
});
  module.exports = router;