var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'synergy'
});

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

/* GET home page. */
router.get('/:promptId', function(req, res, next) {
  var d = new Date();
  var n = d.getHours();
  console.log(typeof(req.params.promptId));
  connection.query('SELECT * FROM synergy.email_prompts WHERE id = '.concat(req.params.promptId), function (err, row, fields) { 
    if (err) throw err;
    res.render('index', { subject: row[0].description, sender: row[0].sender, salutation: row[0].salutation, body: row[0].body, closing: row[0].closing, hours: n-9 });
  });
});

module.exports = router;
