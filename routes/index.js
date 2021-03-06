var express = require('express');
var pgp = require('pg-promise')();
var db;

if (process.env.DATABASE_URL != null) {
  db = pgp(process.env.DATABASE_URL)
} else {
  db = pgp('postgres://root:password@db:5432/empti')
}
var router = express.Router();

const OpenAI = require('openai-api')
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI(OPENAI_API_KEY)

// catch the favicon request for now
router.get('/favicon.ico', (req, res) => res.status(204));

// home
router.get('/', function (req, res) {
  res.render('consent');
})

// credit
router.get('/credit', function(req, res) {
  res.render('credit');
})

// for testing and development
router.get('/paDLxuIdmr9lcdFqD7vn/test', function (req, res) {
  res.render('test');
})

// goodbye
router.get('/:uid/goodbye', function (req, res) {
  db.one("UPDATE participants SET completed = 1, finish = current_timestamp WHERE id = '" + req.params.uid + "' RETURNING id")
    .then(data => {
      res.render('goodbye');
    })
    .catch(function (error) {
      console.log(error)
    }) 
});

// consent
router.get('/:uid/consent', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('consent')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/welcome_1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome_1')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/welcome_2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome_2')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/welcome_3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome_3')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/questionnaire_1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire_1')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/questionnaire_2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire_2')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/questionnaire_3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire_3')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/questionnaire_4', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire_4')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/questionnaire_5', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire_5')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/questionnaire_6', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('questionnaire_6')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

//  welcome 4
router.get('/:uid/welcome_4', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('welcome_4')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// tutorial 0
router.get('/:uid/tutorial_0', function (req, res) {
  db.one("SELECT id, completed, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.t1_complete) {
          res.render('tutorial_0', {
            order: "two"
          })
        } else {
          res.render('tutorial_0', {
            order: "one"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// tutorial 1
router.get('/:uid/tutorial_1', function (req, res) {
  db.one("SELECT id, completed, t0_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.t0_complete) {
          res.render('tutorial_1', {
            order: "two"
          })
        } else {
          res.render('tutorial_1', {
            order: "one"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/tutorial_transition_0', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('tutorial_transition_0');
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/tutorial_transition_1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('tutorial_transition_1');
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/manipulation_check_1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('manipulation_check_1');
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/manipulation_check_2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('manipulation_check_2');
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// pre_survey_1
router.get('/:uid/pre_survey_1', function (req, res) {
  db.one("SELECT id, completed, synergy_first FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first) {
          res.render('pre_survey_1', {
            algorithm: "Smart Predictor"
          })
        } else {
          res.render('pre_survey_1', {
            algorithm: "CS Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_1
router.get('/:uid/survey_1', function (req, res) {
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first && data.t0_complete && data.t1_complete) {
          res.render('survey_1', {
            algorithm: "CS Predictor"
          })
        } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
          res.render('survey_1', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('survey_1', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_2
router.get('/:uid/survey_2', function (req, res) {
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first && data.t0_complete && data.t1_complete) {
          res.render('survey_2', {
            algorithm: "CS Predictor"
          })
        } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
          res.render('survey_2', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('survey_2', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_3
router.get('/:uid/survey_3', function (req, res) {
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first && data.t0_complete && data.t1_complete) {
          res.render('survey_3', {
            algorithm: "CS Predictor"
          })
        } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
          res.render('survey_3', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('survey_3', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_4
router.get('/:uid/survey_4', function (req, res) {
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first && data.t0_complete && data.t1_complete) {
          res.render('survey_4', {
            algorithm: "CS Predictor"
          })
        } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
          res.render('survey_4', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('survey_4', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_5
router.get('/:uid/survey_5', function (req, res) {
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first && data.t0_complete && data.t1_complete) {
          res.render('survey_5', {
            algorithm: "CS Predictor"
          })
        } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
          res.render('survey_5', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('survey_5', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_6
router.get('/:uid/survey_6', function (req, res) {
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first && data.t0_complete && data.t1_complete) {
          res.render('survey_6', {
            algorithm: "CS Predictor"
          })
        } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
          res.render('survey_6', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('survey_6', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// pre_survey_2
router.get('/:uid/pre_survey_2', function (req, res) {
  db.one("SELECT id, completed, synergy_first FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        if (data.synergy_first) {
          res.render('pre_survey_2', {
            algorithm: "CS Predictor"
          })
        } else {
          res.render('pre_survey_2', {
            algorithm: "Smart Predictor"
          })
        }
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// pre_survey_3
router.get('/:uid/pre_survey_3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('pre_survey_3')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_1
router.get('/:uid/survey_gen_1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_1')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_2
router.get('/:uid/survey_gen_2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_2')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_3
router.get('/:uid/survey_gen_3', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_3')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_4
router.get('/:uid/survey_gen_4', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_4')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_5
router.get('/:uid/survey_gen_5', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_5')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_6
router.get('/:uid/survey_gen_6', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_6')
      } else if (data.id == req.params.uid && data.completed == 1) {
        res.render('goodbye')
      } else {
        res.render('wrong_uid')
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// survey_gen_7
router.get('/:uid/survey_gen_7', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('survey_gen_7')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/mturk_1', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('mturk_1')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
router.get('/:uid/mturk_2', function (req, res) {
  db.one("SELECT id, completed FROM participants WHERE id = $1", [req.params.uid])
    .then(function (data) {
      if (data.id == req.params.uid && data.completed == 0) {
        res.render('mturk_2')
      } else if (data.id == req.params.uid && data.completed == 1) {
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
      } else if (data.id == req.params.uid && data.completed == 1) {
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
                res.redirect('/' + req.params.uid + '/tutorial_1')
              } else if ((prompt_count < 4 && synergy_first == 1 && t1_complete == 1) || (prompt_count >= 4 && synergy_first == 0 && t1_complete == 1)) {
                res.render('email_1', {
                  subject: data.description,
                  sender: data.sender,
                  salutation: data.salutation,
                  body: data.body,
                  closing: data.closing,
                  hours: n - 9,
                  b: bi
                });
              } else if ((prompt_count < 4 && synergy_first == 0 && t0_complete == 0) || (prompt_count >= 4 && synergy_first == 1 && t0_complete == 0)) {
                res.redirect('/' + req.params.uid + '/tutorial_0')
              } else if ((prompt_count < 4 && synergy_first == 0 && t0_complete == 1) || (prompt_count >= 4 && synergy_first == 1 && t0_complete == 1)) {
                res.render('email_0', {
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

// generate new uid
router.post('/new_uid', function (req, res) {
  var is_unique = false;
  var id = make_id(20);
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  var bias0 = [0, 0, 1, 1];
  var bias1 = [0, 0, 1, 1];
  shuffle(arr);
  shuffle(bias0);
  shuffle(bias1);
  while (!is_unique) {
    db.one("SELECT COUNT(*) FROM participants WHERE id = $1", id)
      .then(function (data) {
        if (data.count == 1) {
          id = make_id(20);
        } else {
          db.one('INSERT INTO participants VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, current_timestamp, current_timestamp) RETURNING id', [id, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], bias0[0], bias0[1], bias0[2], bias0[3], bias1[0], bias1[1], bias1[2], bias1[3], 0, Math.floor(Math.random() * 2), 0, 0, 0])
            .then(value => {
              res.send({
                "uid": id
              });
            })
            .catch(function (error) {
              console.log(error)
            });
          is_unique = true;
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    return
  }
})

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
    .then(uid => {})
    .catch(function (error) {
      console.log(error)
    })

  for (var i = 0; i < req.body.dprime.length; i++) {
    db.one('INSERT INTO dprime(uid, submission_time, email_id, code, suggestion, suggestion_time, root, tab_time) VALUES ($1, current_timestamp, $2, $3, $4, $5, $6, $7) RETURNING UID', [req.body.uid, req.body.email_id, req.body.dprime[i].code, req.body.dprime[i].suggestion, req.body.dprime[i].suggestionTime, req.body.dprime[i].root, req.body.dprime[i].tabTime])
      .then(uid => {
        console.log("INSERT SUCCESS")
      })
      .catch(function (error) {
        console.log(error)
      })
  }
});

// tab key press
router.post('/tab', function (req, res) {
  db.one('INSERT INTO tabs(uid, email_id, predictive_text, tab_time, hit_time, miss_time, false_alarm_time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING uid', [req.body.uid, req.body.email_id, req.body.predictive_text, req.body.tab_time, req.body.hit_time, req.body.miss_time, req.body.false_alarm_time])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      res.send({
        "error": error
      })
    })
})

// submit questionnaire 1
router.post('/q1_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_1(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit questionnaire 2
router.post('/q2_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_2(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit questionnaire 3
router.post('/q3_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_3(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit questionnaire 4
router.post('/q4_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_4(uid, submission_time, medium, frequency) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit questionnaire 5
router.post('/q5_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_5(uid, submission_time, perspective, checked) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.perspective, req.body.checked])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit questionnaire 6
router.post('/q6_submit', function (req, res) {
  db.one('INSERT INTO questionnaire_6(uid, submission_time, ability, skill) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.ability, req.body.skill])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit manipulation check 1
router.post('/manipulation_check_1_submit', function (req, res) {
  db.one('INSERT INTO manipulation_check_1(uid, submission_time, answer) VALUES ($1, current_timestamp, $2) RETURNING uid', [req.body.uid, req.body.answer])
    .then(uid => {
      return db.one("SELECT synergy_first FROM participants WHERE id = '" + req.body.uid + "'")
    })
    .then(result => {
      if (result.synergy_first == 0 && req.body.answer == "CS Predictor") {
        res.send({
          "correct": true
        })
      } else if (result.synergy_first == 1 && req.body.answer == "Smart Predictor") {
        res.send({
          "correct": true
        })
      } else {
        res.send({
          "correct": false
        })
      }
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit manipulation check 2
router.post('/m2_submit', function (req, res) {
  db.one('INSERT INTO manipulation_check_2(uid, submission_time, answer) VALUES ($1, current_timestamp, $2) RETURNING uid', [req.body.uid, req.body.answer])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_1
router.post('/s1-1_submit', function (req, res) {
  var algorithm
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.body.uid])
    .then(function (data) {
      if (data.synergy_first && data.t0_complete && data.t1_complete) {
        algorithm = "CS Predictor"
      } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
        algorithm = "CS Predictor"
      } else {
        algorithm = "Smart Predictor"
      }
      return db.one('INSERT INTO survey_1(uid, submission_time, algorithm, measure, value) VALUES ($1, current_timestamp, $2, $3, $4) RETURNING uid', [req.body.uid, algorithm, req.body.medium, req.body.frequency])
    })
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_2
router.post('/s1-2_submit', function (req, res) {
  var algorithm
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.body.uid])
    .then(function (data) {
      if (data.synergy_first && data.t0_complete && data.t1_complete) {
        algorithm = "CS Predictor"
      } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
        algorithm = "CS Predictor"
      } else {
        algorithm = "Smart Predictor"
      }
      return db.one('INSERT INTO survey_2(uid, submission_time, algorithm, question, answer) VALUES ($1, current_timestamp, $2, $3, $4) RETURNING uid', [req.body.uid, algorithm, req.body.medium, req.body.frequency])
    })
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_3
router.post('/s1-3_submit', function (req, res) {
  var algorithm
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.body.uid])
    .then(function (data) {
      if (data.synergy_first && data.t0_complete && data.t1_complete) {
        algorithm = "CS Predictor"
      } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
        algorithm = "CS Predictor"
      } else {
        algorithm = "Smart Predictor"
      }
      return db.one('INSERT INTO survey_3(uid, submission_time, algorithm, question, answer) VALUES ($1, current_timestamp, $2, $3, $4) RETURNING uid', [req.body.uid, algorithm, req.body.medium, req.body.frequency])
    })
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_4
router.post('/s1-4_submit', function (req, res) {
  var algorithm
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.body.uid])
    .then(function (data) {
      if (data.synergy_first && data.t0_complete && data.t1_complete) {
        algorithm = "CS Predictor"
      } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
        algorithm = "CS Predictor"
      } else {
        algorithm = "Smart Predictor"
      }
      return db.one('INSERT INTO survey_4(uid, submission_time, algorithm, question, answer) VALUES ($1, current_timestamp, $2, $3, $4) RETURNING uid', [req.body.uid, algorithm, req.body.medium, req.body.frequency])
    })
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_5
router.post('/s1-5_submit', function (req, res) {
  var algorithm
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.body.uid])
    .then(function (data) {
      if (data.synergy_first && data.t0_complete && data.t1_complete) {
        algorithm = "CS Predictor"
      } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
        algorithm = "CS Predictor"
      } else {
        algorithm = "Smart Predictor"
      }
      return db.one('INSERT INTO survey_5(uid, submission_time, algorithm, question, answer) VALUES ($1, current_timestamp, $2, $3, $4) RETURNING uid', [req.body.uid, algorithm, req.body.medium, req.body.frequency])
    })
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_6
router.post('/s1-6_submit', function (req, res) {
  var algorithm
  db.one("SELECT id, completed, synergy_first, t0_complete, t1_complete FROM participants WHERE id = $1", [req.body.uid])
    .then(function (data) {
      if (data.synergy_first && data.t0_complete && data.t1_complete) {
        algorithm = "CS Predictor"
      } else if (!data.synergy_first && (!data.t0_complete || !data.t1_complete)) {
        algorithm = "CS Predictor"
      } else {
        algorithm = "Smart Predictor"
      }
      return db.one('INSERT INTO survey_6(uid, submission_time, algorithm, question, answer) VALUES ($1, current_timestamp, $2, $3, $4) RETURNING uid', [req.body.uid, algorithm, req.body.medium, req.body.frequency])
    })
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_1
router.post('/s3-1_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_1(uid, submission_time, question, answer) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_2
router.post('/s3-2_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_2(uid, submission_time, question, answer) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_3
router.post('/s3-3_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_3(uid, submission_time, question, answer) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_4
router.post('/s3-4_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_4(uid, submission_time, devices) VALUES ($1, current_timestamp, $2) RETURNING uid', [req.body.uid, req.body.devices])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_5
router.post('/s3-4-5_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_5(uid, submission_time, question, answer) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_6
router.post('/s3-4-5-6_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_6(uid, submission_time, clarification) VALUES ($1, current_timestamp, $2) RETURNING uid', [req.body.uid, req.body.devices])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
})

// submit survey_gen_7
router.post('/s3-5_submit', function (req, res) {
  db.one('INSERT INTO survey_gen_7(uid, submission_time, question, answer) VALUES ($1, current_timestamp, $2, $3) RETURNING uid', [req.body.uid, req.body.medium, req.body.frequency])
    .then(uid => {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log(error)
    })
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

// tutorial_0 complete
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
      return db.one("SELECT e" + result + ", t0_complete, t1_complete FROM participants WHERE id = '" + req.body.uid + "'");
    })
    .then(result => {
      res.send({
        "email_id": Object.values(result)[0],
        "t0_complete": result.t0_complete,
        "t1_complete": result.t1_complete
      });
    })
    .catch(err => {
      console.log(err)
    })
})


// tutorial_1 complete
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
      return db.one("SELECT e" + result + ", t0_complete, t1_complete FROM participants WHERE id = '" + req.body.uid + "'");
    })
    .then(result => {
      res.send({
        "email_id": Object.values(result)[0],
        "t0_complete": result.t0_complete,
        "t1_complete": result.t1_complete
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

// check if tutorials are complete
router.post('/tutorial_complete', function (req, res) {
  var t0_complete
  var t1_complete
  db.one("SELECT prompt_count, t0_complete, t1_complete FROM participants WHERE id ='" + req.body.uid + "'")
    .then(data => {
      t0_complete = data.t0_complete
      t1_complete = data.t1_complete
      if (data.prompt_count == 8) {
        return 8
      } else {
        return db.one("SELECT e" + data.prompt_count + " FROM participants WHERE id = '" + req.body.uid + "'")
      }
    })
    .then(result => {
      if (result == 8) {
        res.send({
          "email_id": null,
          "t0_complete": t0_complete,
          "t1_complete": t1_complete
        })
      } else {
        res.send({
          "email_id": Object.values(result)[0],
          "t0_complete": t0_complete,
          "t1_complete": t1_complete
        })
      }
    })
})

router.post('/gpt_predict', async function (req, res) {
  openai.complete({
    engine: 'davinci',
    prompt: req.body.prompt,
    maxTokens: 32,
    temperature: 0.4,
    topP: 1,
    presencePenalty: 1,
    frequencyPenalty: 1,
    bestOf: 1,
    n: 1,
    stream: false,
    stop: ['.']
  })
  .then(gptResponse => {
    res.send({
      "text": gptResponse.data.choices[0].text
    })
  })
  .catch(error => {
    console.error('Error:', error)
  })
})

module.exports = router;

function make_id(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}