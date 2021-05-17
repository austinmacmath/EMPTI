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

// home page
router.get('/', function(req, res) {
  res.render('index')
});

// emails
router.get('/:promptId', function(req, res) {
  var d = new Date();
  var n = d.getHours();
  connection.query('SELECT * FROM synergy.email_prompts WHERE id = ?', [req.params.promptId], function (err, row, fields) { 
    if (err) throw err;
    res.render('email', { subject: row[0].description, sender: row[0].sender, salutation: row[0].salutation, body: row[0].body, closing: row[0].closing, hours: n-9 });
  });
});

// send button click
router.post('/send', function (req, res, next) {
  connection.query('INSERT INTO synergy.responses(response, submission_time) VALUES (?, now())', [req.body.message], function (err, row, fields) {
    if (err) throw err;
    res.render('goodbye');
  });
});

// tab key press
router.post('/tab', function (req, res) {
  res.sendStatus(200);
})

module.exports = router;
