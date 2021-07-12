# Synergy
**THIS IS THE README FOR THE DEVELOPMENT APP.**<br><br>
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

## To Do
* implement biased model
* encode d'
* model should work for capital words also
* user testing

## Updates
### 7/7
* half synergistic half non-synergistic
* random selection of bias/unbias model
* predictionary
    * trained predictionary on original email
* prevent backpaging check
* fix time difference on email
* tutorial emails
    * content the same for both?
    * what order? 
* include "completed" flag once a user is done
* print out suggestion time and text
* print out hit time and text (unbiased only)
* print out miss time and text (unbiased only)
* predictive text doesn't work if writing in middle of paragraph. 

### 7/21
* minimum 100 word count
* differing content in tutorial
* replace "real simulation" with "live page"
* include reminder of tab key

## Questions
* How to define bias? 

## Security Concerns
* SQL injection
* backpaging and corrupting data
* submitting data after end of experiment
* not being provided all 10 questions
* guessing someone else's uid
* promises not handled correctly

## Technical Concerns

## Edits
* for credibility
    * add google logo
* add all manipulations on high synergy page
* synergy is all of the manipuilations
* between tutorial and real thing, have black screen syaing experiment beginning
    * reiterate instructions from first page
* move tutorial right in front of corresponding synergistic condition
* for identification manipulation, put the writing questionnaire at the very beginning
    * say algorithm just learned from the questionnaire for high synergy condition]
    * algorithm doesn't learn from questiionnaire for low synergy
* collect # of times unique words were chosen from each dataset
* could find corpus of commonly misspelled words
