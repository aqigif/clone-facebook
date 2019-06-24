const express = require('express');
const router = express.Router();
const model = require('../models/index');
const bodyParser = require('body-parser');
// GET posts listing.
router.get('', async function (req, res, next) {
    try {
      const posts = await model.posts.findAll({include: ['users']});
      if (posts.length !== 0) {
        res.json({
          'status': 'OK',
          'messages': '',
          'data': posts
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


// GET post ID listing.
router.get('/:id', async function (req, res, next) {
  try {
    const postId = req.params.id;
    const posts = await model.posts.findByPk(postId, {include: ['users']});
    if (posts.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': posts
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
    usersId,
    feed,
    imgPost,
    react,
    comment,
    share
    } = req.body;
    const posts = await model.posts.create({
      usersId,
      feed,
      imgPost,
      react,
      comment,
      share
    });
  if (posts) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'User berhasil ditambahkan',
      'data': posts,
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

//UPDATE
router.patch('/:id', async function (req, res, next) {
  try {
    const postId = req.params.id;
    const {
      usersId,
      feed,
      imgPost,
      react,
      comment,
      share
    } = req.body;
    const posts = await model.posts.update({
      usersId,
      feed,
      imgPost,
      react,
      comment,
      share
    }, {
      where: {
        id: postId
      }
    });
    if (posts) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil diupdate',
        'data': posts,
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
    const postId = req.params.id;
    const posts = await model.posts.destroy({ where: {id: postId}})
    if (posts) {
      res.json({
        'status': 'OK',
        'messages': 'User berhasil dihapus',
        'data': posts,
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