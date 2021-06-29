var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:password@localhost:5432/synergy');

// const { Client } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'synergy',
//   password: 'password',
//   port: 5432,
// });

// client.connect();

function make_id(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var is_unique = false;
var id = make_id(20);
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var bias0 = [0, 0, 1, 1];
var bias1 = [0, 0, 1, 1];
shuffle(arr);
shuffle(bias0);
shuffle(bias1);

async function get_user() {
  console.log("begin");
  while(!is_unique) {
    await db.one("SELECT COUNT(*) FROM participants WHERE id = $1", id)
        .then(function (data) {
          if(data.count == 1) {
            console.log(id + " exists, generating new id");
            id = make_id(20);
          } else {
            console.log(id + " is unique");
            db.one('INSERT INTO participants VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) RETURNING id', [id, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], bias0[0], bias0[1], bias0[2], bias0[3], bias1[0], bias1[1], bias1[2], bias1[3], 0, Math.floor(Math.random() * 2)])
              .then(id => {
                console.log(id)
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
    console.log("finished");
  }
}

get_user();
// console.log(make_id(20), arr);