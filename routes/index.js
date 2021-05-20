var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:password@localhost:5432/synergy');
var router = express.Router();

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

// home page
router.get('/:uid', function(req, res) {
  db.one("SELECT COUNT(*) FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if(data.count == 1) {
        res.render('index')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
});

// emails
router.get('/:uid/:promptId', function(req, res) {
  db.one("SELECT COUNT(*) FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if(data.count == 1) {
        var d = new Date();
        var n = d.getHours();
        db.one('SELECT * FROM email_prompts WHERE id = $1', [req.params.promptId])
          .then(function (data) {
            res.render('email', { subject: data.description, sender: data.sender, salutation: data.salutation, body: data.body, closing: data.closing, hours: n-9 });
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        res.render('wrong_uid')
      }
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
  db.one('INSERT INTO responses(response, submission_time, uid) VALUES ($1, current_timestamp, $2) RETURNING uid', [req.body.message, req.body.uid])
    .then(uid => {
      console.log(uid)
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
