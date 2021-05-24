var express = require('express');
var pgp = require('pg-promise')();
var db = pgp(process.env.DATABASE_URL);
var router = express.Router();

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

// goodbye
router.get('/goodbye', function(req, res) {
  res.render('goodbye');
});

// db test
router.get('/db', function (req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM participants');
    const results = { 'results': (result) ? result.rows : null};
    res.send(results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

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
        if(n - 9 < 0) {
          n += 24;
        }
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

// send button click
router.post('/send', function (req, res, next) {
  // for a specified user, needs to increment count and get count
  var prompt_count;
  db.one("UPDATE participants SET prompt_count = prompt_count + 1 WHERE id = '" + req.body.uid + "'; SELECT prompt_count FROM participants WHERE id = '" + req.body.uid + "'")
  .then(result => {
      prompt_count = result.prompt_count;
      return prompt_count;
  })
  .then(result => {
      console.log("inside count: ", result);
      return db.one("SELECT e" + result + " FROM participants WHERE id = '" + req.body.uid + "'");
  })
  .then(result => {
      console.log("RESULT: ", result);
      res.send({"email_id": Object.values(result)[0]});
  })
  .catch(error => {
    console.log(error);
    res.send({"email_id": -1});
  })
  console.log("outside count: ", prompt_count);

  db.one('INSERT INTO responses(response, submission_time, uid, email_id) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.message, req.body.uid, req.body.email_id])
    .then(uid => {
      console.log("INSERT success: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
});

// tab key press
router.post('/tab', function (req, res) {
  res.sendStatus(200);
})

// start button click
router.post('/start', function (req, res) {
  db.one('SELECT e0 FROM participants where id = $1', [req.body.uid])
    .then(function (data) {
      console.log(data.e0)
      // res.send(data.email_order)
      res.send({"email": data.e0})
    })
    .catch(function (error) {
      console.log(error)
    })
    // res.sendStatus(200)
})

module.exports = router;
