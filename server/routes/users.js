const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken')


// GET users listing.
router.get('', async function (req, res, next) {
  try {
    const users = await model.users.findAll({});
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});
// GET users ID listing.
router.get('/:id', async function (req, res, next) {
  try {
    const users = await model.users.findOne({
      where:{id: req.params.id}
    });
    if (users.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': users
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});
// CREATE
router.post('/', async function (req, res, next) {
  try {
    const {
      name,
      email,
      avatar,
      username,
      password,
      phoneNumber,
      gender
    } = req.body;
    const users = await model.users.create({
      name,
      email,
      avatar,
      username,
      password,
      phoneNumber,
      gender
    });
  if (users) {
    jwt.sign({users:users},'secretkey',(err,token)=>{
    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
      'data': token
    });
  });
  }
 } catch (err) {
   res.status(400).json({
     'status': 'ERROR',
     'messages': err.message,
     'data': {},
   })
 }
});

//UPDATE
router.patch('/:id', async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const {
      name,
      email,
      avatar,
      username,
      password,
      phoneNumber,
      gender
    } = req.body;
    const users = await model.users.update({
      name,
      email,
      avatar,
      username,
      password,
      phoneNumber,
      gender
    }, {
      where: {
        id: usersId
      }
    });
    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil diupdate',
        'data': users,
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
}); 
//delete
router.delete('/:id', async function (req, res, next) {
  try {
    const usersId = req.params.id;
    const users = await model.users.destroy({ where: {
      id: usersId
    }})
    if (users) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil dihapus',
        'data': users,
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
});
module.exports = router;