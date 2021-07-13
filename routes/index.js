var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:password@localhost:5432/synergy');
var router = express.Router();

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

// for testing and development
router.get('/test', function(req, res) {
  res.render('test');
})

// goodbye
router.get('/goodbye', function(req, res) {
  res.render('goodbye');
});

// home page
router.get('/:uid', function(req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if(data.id == req.params.uid && data.completed == 0) {
        res.render('index')
      } else if(data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye') 
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log('home')
      console.log(error)
    })
});

// tutorial-0
router.get('/:uid/t0', function(req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
  .then(function (data) {
    if(data.id == req.params.uid && data.completed == 0) {
      res.render('tutorial-0')
    } else if(data.id = req.params.uid && data.completed == 1) {
      res.render('goodbye') 
    } else {
      res.render('wrong_uid')
    }
  })
  .catch(function (error) {
    console.log('tutorial0')
    console.log(error)
  })
})

// tutorial-1
router.get('/:uid/t1', function(req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
  .then(function (data) {
    if(data.id == req.params.uid && data.completed == 0) {
      res.render('tutorial-1')
    } else if(data.id = req.params.uid && data.completed == 1) {
      res.render('goodbye') 
    } else {
      res.render('wrong_uid')
    }
  })
  .catch(function (error) {
    console.log('tutorial1')
    console.log(error)
  })
})

// emails
router.get('/:uid/:promptId', function(req, res) {
  db.one("SELECT * FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if(data.id == req.params.uid) {
        var d = new Date();
        var n = d.getHours();
        if(n - 9 < 0) {
          n += 24;
        }
        var prompt_count = data.prompt_count;
        var t0_complete = data.t0_complete;
        var t1_complete = data.t1_complete;
        if(prompt_count >= 8) {
          db.one("UPDATE participants SET completed = 1 WHERE id = '" + req.params.uid + "' RETURNING id")
            .then(data => {
              res.render('goodbye');
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          var synergy_first = data.synergy_first;
          var bi;
          db.one("SELECT b" + prompt_count + " FROM participants WHERE id = '" + req.params.uid + "'")
            .then(data => {
              bi = Object.values(data)[0];
              return db.one('SELECT * FROM email_prompts WHERE id = $1', [req.params.promptId]);
            })
            .then(function (data) {
              if((prompt_count < 4 && synergy_first == 1 && t1_complete == 0) || (prompt_count >= 4 && synergy_first == 0 && t1_complete == 0)) {
                // window.location = '/' + req.params.uid + 't1'
                res.redirect('/' + req.params.uid + '/t1')
              } else if((prompt_count < 4 && synergy_first == 1 && t1_complete == 1) || (prompt_count >= 4 && synergy_first == 0 && t1_complete == 1)) {
                  res.render('email1', { 
                    subject: data.description, 
                    sender: data.sender, 
                    salutation: 
                    data.salutation, 
                    body: data.body, 
                    closing: data.closing, 
                    hours: n-9, 
                    b:bi });
              } else if((prompt_count < 4 && synergy_first == 0 && t0_complete == 0) || (prompt_count >= 4 && synergy_first == 1 && t0_complete == 0)) {
                // window.location = '/' + req.params.uid + 't0'
                // res.render('tutorial-0') // should call  router.get('/:uid/t0', function(req, res) here somehow
                res.redirect('/' + req.params.uid + '/t0')
              } else if((prompt_count < 4 && synergy_first == 0 && t0_complete == 1) || (prompt_count >= 4 && synergy_first == 1 && t0_complete == 1)) {
                res.render('email0', { 
                  subject: data.description, 
                  sender: data.sender, 
                  salutation: data.salutation, 
                  body: data.body, 
                  closing: data.closing, 
                  hours: n-9, 
                  b:bi });
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
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
      return db.one("SELECT e" + result + " FROM participants WHERE id = '" + req.body.uid + "'");
  })
  .then(result => {
      res.send({"email_id": Object.values(result)[0]});
  })
  .catch(error => {
    console.log(error);
    res.send({"email_id": -1});
  })

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
  db.one('INSERT INTO tabs(uid, email_id, predictive_text, tab_time, hit_time, miss_time, false_alarm_time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING uid', [req.body.uid, req.body.email_id, req.body.predictive_text, req.body.tab_time, req.body.hit_time, req.body.miss_time, req.body.false_alarm_time])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      res.send({"error": error})
    })
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

// t0 complete
router.post('/t0_complete', function (req, res) {
  db.one("UPDATE participants SET t0_complete = 1 WHERE id = '" + req.body.uid + "' RETURNING id")
    .then(data => {
      console.log(data)
      return db.one("SELECT prompt_count FROM participants WHERE id = '" + req.body.uid + "'")
    })
    .then(result => {
      var prompt_count = result.prompt_count;
      return prompt_count;
    })
    .then(result => {
      return db.one("SELECT e" + result + " FROM participants WHERE id = '" + req.body.uid + "'");
    })
    .then(result => {
      console.log("result")
      console.log(result)
      res.send({"email_id": Object.values(result)[0]});
      console.log("email_id: ", Object.values(result)[0])
    })
    .catch(err => {
      console.log(err)
    }) 
})


// t1 complete
router.post('/t1_complete', function (req, res) {
  db.one("UPDATE participants SET t1_complete = 1 WHERE id = '" + req.body.uid + "' RETURNING id")
    .then(data => {
      console.log(data)
      return db.one("SELECT prompt_count FROM participants WHERE id = '" + req.body.uid + "'")
    })
    .then(result => {
      var prompt_count = result.prompt_count;
      return prompt_count;
    })
    .then(result => {
      return db.one("SELECT e" + result + " FROM participants WHERE id = '" + req.body.uid + "'");
    })
    .then(result => {
      console.log("result")
      console.log(result)
      console.log("email_id: ", Object.values(result)[0])
      res.send({"email_id": Object.values(result)[0]});
    })
    .catch(err => {
      console.log(err)
    }) 
})

module.exports = router;
