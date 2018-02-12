var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness: "sucky"},
  { name: "EJS", usefulness: "a little better"},
  { name: "Handlebars", usefulness: "awesome"}
]
/* GET home page. */
router.get('/', function(req, res, next) {

  connect.query('SELECT * FROM mainmodel', (err, result, fields) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);
    }
  })
  res.render('home', {
  title: 'Express' ,
  message: "i hate this",
  templates : templateTypes,
  anothermessage : "handlebars is awesome"
  });
});

module.exports = router;
