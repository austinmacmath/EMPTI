# Synergy
**THIS IS THE README FOR THE DEVELOPMENT APP.**<br><br>
This is a Google Smart Compose/email client simulator for the Synergy project. Work in progress.

## Requirements
* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* (Python) tensorflow 1.15 
* (Python) tensorflowjs 1.1.5
* (JS) @tensorflow/tfjs-node 1.3.2
* Optional: [pgAdmin](https://www.pgadmin.org/)

## Background Information
* [Study Information](https://docs.google.com/document/d/1pITKxX8v58MLusvwPeIaSM7F8YYrLQISV1gCkjubNV0)
* [Design](https://docs.google.com/document/d/1poJQO2GKQ6j3X6-B_ka_6YI4fTV3rGEd9f98XrYKm0M)

## Local Start Instructions
1. [Install](https://www.postgresql.org/download/) PostgreSQL
2. Start a PostgreSQL instance at `localhost:5432`
3. Create a database `synergy` 
4. Clone this repo: `git@github.com:austinmacmath/synergy-app.git`
5. Change directories: `cd synergy-app`
6. Restore the database dump: `psql synergy < synergy_dump.sql`
7. Start the application:`DEBUG=synergy-app:* npm start`
8. Navigate to [localhost:3000](http://localhost:3000) in your browser for the homepage and `localhost:3000/<UID>/<EMAIL ID>` for the different email prompts

## Generating new UIDs
Run `node make_id.js`. This will create a new random 20 digit string for a user. 

## How to Browserify
`browserify worker.js > bundle.js`

## To Do
* implement training email
* implement different conditions
    * 1st half synergistic
        * 2 non-biased
        * 2 biased
    * 2nd half non-synergistic
        * 2 non-biased
        * 2 biased
* implement predictionary
    * browserify predictionary
* prevent user from backpaging and modifying answers
    * solution: flag user once final submission and redirect page
    * solution: check if email id exists in response table already for a uid and if it does, do not increment prompt_count and redirect
* user testing

## Security Concerns
* SQL injection
* backpaging and corrupting data
* submitting data after end of experiment
* not being provided all 10 questions
* guessing someone else's uid
* promises not handled correctly

## Technical Concerns
* latency/bandwidth
