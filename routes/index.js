var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:password@localhost:5432/synergy');
var router = express.Router();

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

// home page
router.get('/', function(req, res) {
  res.render('index')
});

// emails
router.get('/email/:promptId', function(req, res) {
  var d = new Date();
  var n = d.getHours();
  db.one('SELECT * FROM email_prompts WHERE id = $1', [req.params.promptId])
    .then(function (data) {
      res.render('email', { subject: data.description, sender: data.sender, salutation: data.salutation, body: data.body, closing: data.closing, hours: n-9 });
    })
    .catch(function (error) {
      console.log(error)
    })
});

// goodbye
router.get('/goodbye', function(req, res) {
  res.render('goodbye');
});

// send button click
router.post('/send', function (req, res, next) {
  db.one('INSERT INTO responses(response, submission_time) VALUES ($1, current_timestamp) RETURNING submission_time', [req.body.message])
    .then(submission_time => {
      console.log(submission_time)
    })
    .catch(function (error) {
      console.log(error)
    })
    res.sendStatus(200);
});

// tab key press
router.post('/tab', function (req, res) {
  res.sendStatus(200);
})

module.exports = router;
