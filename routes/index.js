var express = require('express');
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:password@localhost:5432/synergy');
var router = express.Router();

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

// for testing and development
router.get('/test', function (req, res) {
  res.render('test');
})

// goodbye
router.get('/goodbye', function (req, res) {
  res.render('goodbye');
});

// consent
router.get('/:uid/consent', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('consent')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// welcome 1
router.get('/:uid/welcome1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome1')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
});

// welcome 2
router.get('/:uid/welcome2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome2')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
});

// welcome 3
router.get('/:uid/welcome3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome3')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
});

// questionnaire 1
router.get('/:uid/questionnaire1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire1')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// questionnaire 2
router.get('/:uid/questionnaire2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire2')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// questionnaire 3
router.get('/:uid/questionnaire3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire3')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// questionnaire 4
router.get('/:uid/questionnaire4', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        console.log(data.completed)
        res.render('questionnaire4')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// questionnaire 5
router.get('/:uid/questionnaire5', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire5')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// questionnaire 6
router.get('/:uid/questionnaire6', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire6')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// loading
router.get('/:uid/loading', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('loading')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// tutorial transition 0
router.get('/:uid/tt0', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('tutorial-transition-0');
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// tutorial transition 1
router.get('/:uid/tt1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('tutorial-transition-1');
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})


// tutorial-0
router.get('/:uid/t0', function (req, res) {
  db.one("SELECT id, completed, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.t1_complete) {
          res.render('tutorial-0', {
            order: "two"
          })
        } else {
          res.render('tutorial-0', {
            order: "one"
          })
        }
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// tutorial-1
router.get('/:uid/t1', function (req, res) {
  db.one("SELECT id, completed, t0_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.t0_complete) {
          res.render('tutorial-1', {
            order: "two"
          })
        } else {
          res.render('tutorial-1', {
            order: "one"
          })
        }
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// manipulation check 1
router.get('/:uid/m1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('manipulation-check-1');
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// manipulation check 2
router.get('/:uid/m2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('manipulation-check-2');
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey-1
router.get('/:uid/s1', function (req, res) {
  db.one("SELECT id, completed, synergy_first FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first) {
          res.render('survey-1', {
            algorithm: "Smart Predictor"
          })
        } else {
          res.render('survey-1', {
            algorithm: "Ringgo"
          })
        }
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey-2
router.get('/:uid/s2', function (req, res) {
  db.one("SELECT id, completed, synergy_first FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first) {
          res.render('survey-2', {
            algorithm: "Ringgo"
          })
        } else {
          res.render('survey-2', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey-3
router.get('/:uid/s3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey-3')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// Mechanical Turk 1
router.get('/:uid/mt1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('mturk-1')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// Mechanical Turk 2
router.get('/:uid/mt2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('mturk-2')
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// break
router.get('/:uid/break', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('break');
      } else if (data.id = req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// emails
router.get('/:uid/:promptId', function (req, res) {
  db.one("SELECT * FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid) {
        var d = new Date();
        var n = d.getHours();
        if (n - 9 < 0) {
          n += 24;
        }
        var prompt_count = data.prompt_count;
        var t0_complete = data.t0_complete;
        var t1_complete = data.t1_complete;
        if (prompt_count >= 8) {
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
              if ((prompt_count < 4 && synergy_first == 1 && t1_complete == 0) || (prompt_count >= 4 && synergy_first == 0 && t1_complete == 0)) {
                res.redirect('/' + req.params.uid + '/t1')
              } else if ((prompt_count < 4 && synergy_first == 1 && t1_complete == 1) || (prompt_count >= 4 && synergy_first == 0 && t1_complete == 1)) {
                res.render('email1', {
                  subject: data.description,
                  sender: data.sender,
                  salutation: data.salutation,
                  body: data.body,
                  closing: data.closing,
                  hours: n - 9,
                  b: bi
                });
              } else if ((prompt_count < 4 && synergy_first == 0 && t0_complete == 0) || (prompt_count >= 4 && synergy_first == 1 && t0_complete == 0)) {
                res.redirect('/' + req.params.uid + '/t0')
              } else if ((prompt_count < 4 && synergy_first == 0 && t0_complete == 1) || (prompt_count >= 4 && synergy_first == 1 && t0_complete == 1)) {
                res.render('email0', {
                  subject: data.description,
                  sender: data.sender,
                  salutation: data.salutation,
                  body: data.body,
                  closing: data.closing,
                  hours: n - 9,
                  b: bi
                });
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
      if (result == '8') {
        return 8
      } else {
        return db.one("SELECT e" + result + ", prompt_count FROM participants WHERE id = '" + req.body.uid + "'");
      }
    })
    .then(result => {
      if (result == 8) {
        res.send({
          "email_id": null,
          "prompt_count": result
        })
      } else {
        res.send({
          "email_id": Object.values(result)[0],
          "prompt_count": result.prompt_count
        });
      }
    })
    .catch(error => {
      console.log(error);
      res.send({
        "email_id": -1
      });
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
      res.send({
        "error": error
      })
    })
  res.sendStatus(200);
})

// submit questionnaire 1
router.post('/q1_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_1(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// submit questionnaire 2
router.post('/q2_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_2(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// submit questionnaire 3
router.post('/q3_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_3(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// submit questionnaire 4
router.post('/q4_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_4(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// submit questionnaire 5
router.post('/q5_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_5(uid, submission_time, perspective, checked) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.perspective, req.body.checked])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// submit questionnaire 6
router.post('/q6_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_6(uid, submission_time, ability, skill) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.ability, req.body.skill])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// submit manipulation check 1
router.post('/m1_submit', function (req, res) {
  db.one('INSERT INTO manipulation_check_1(uid, submission_time, answer) VALUES ($1, current_timestamp, $2) RETURNING uid', [req.body.uid, req.body.answer])
    .then(uid => {
      console.log("INSERT SUCCESS: ", uid)
    })
    .catch(function (error) {
      console.log(error)
    })
  res.sendStatus(200);
})

// start button click
router.post('/start', function (req, res) {
  db.one('SELECT e0 FROM participants where id = $1', [req.body.uid])
    .then(function (data) {
      res.send({
        "email": data.e0
      })
    })
    .catch(function (error) {
      console.log(error)
    })
})

// t0 complete
router.post('/t0_complete', function (req, res) {
  db.one("UPDATE participants SET t0_complete = 1 WHERE id = '" + req.body.uid + "' RETURNING id")
    .then(data => {
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
      res.send({
        "email_id": Object.values(result)[0]
      });
    })
    .catch(err => {
      console.log(err)
    })
})


// t1 complete
router.post('/t1_complete', function (req, res) {
  db.one("UPDATE participants SET t1_complete = 1 WHERE id = '" + req.body.uid + "' RETURNING id")
    .then(data => {
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
      res.send({
        "email_id": Object.values(result)[0]
      });
    })
    .catch(err => {
      console.log(err)
    })
})

// break complete
router.post('/break_complete', function (req, res) {
  db.one("SELECT synergy_first FROM participants WHERE id = '" + req.body.uid + "'")
    .then(data => {
      res.send({
        "synergy_first": data.synergy_first
      })
    })
})

module.exports = router;