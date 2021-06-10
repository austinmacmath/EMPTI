# Synergy
**THIS IS THE README FOR THE PRODUCTION APP.** <br>
This is a Google Smart Compose/email client simulator for the Synergy project. Work in progress.

## Requirements
* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* Optional: [pgAdmin](https://www.pgadmin.org/)

## Background Information
* [Study Information](https://docs.google.com/document/d/1pITKxX8v58MLusvwPeIaSM7F8YYrLQISV1gCkjubNV0)
* [Design](https://docs.google.com/document/d/1poJQO2GKQ6j3X6-B_ka_6YI4fTV3rGEd9f98XrYKm0M)

## Start Instructions
1. Navigate to [synergy-ucsb.herokuapp.com](https://synergy-ucsb.herokuapp.com/)
2. You'll see **Not Found**. This is because you need to provide a UID in the URL path. See [Generating new UIDs](#Generating-new-UIDs). The URL should look like `https://synergy-ucsb.herokuapp.com/my-uid`

## Generating new UIDs
Run `node make_id.js`. This will create a new random 20 digit string for a user. 

## To Do
* prevent user from backpaging and modifying answers
    * solution: flag user once final submission and redirect page
    * solution: check if email id exists in response table already for a uid and if it does, do not increment prompt_count and redirect
* nlp
* log text on tab stroke
* user testing

## Production Notes
* changes are only propagated if pushing to `heroku master`
* insert connection string information in `make_id.js`
    * info can be found in Heroku Datastore Settings
* Heroku Config
    * `NODE_ENV: production`
    * `PGSSLMODE: no-verify`
* Heroku PostgreSQL: `heroku pg:psql`
* Config: `heroku config`

## Security Concerns
* SQL injection
* backpaging and corrupting data
* submitting data after end of experiment
* not being provided all 10 questions
* guessing someone else's uid
* promises not handled correctly

## Technical Concerns
* latency/bandwidth
