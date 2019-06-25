var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'facebook_db'
});

connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * from users', function (error, results) {
    res.send(results)
  })
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  connection.query(`SELECT * from users WHERE users.id=${id}`, function (error, results) {
    res.send(results[0])
  })
});

router.put('/:id', function(req, res){
  var id = req.params.id
  var userName = req.body.name
  var userOrigin = req.body.origin
  
  connection.query(`UPDATE users set users.name = "${userName}" WHERE users.id=${id}`, function (error, results) {
    if(error){
      res.send(error)
    }
    res.send(results)
  })
})





module.exports = router;