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

### 7/21
* between tutorial and real thing, have black screen syaing experiment beginning

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
* make predictionary work in middle of text

## To Do from 7/21 meeting
* add more isntructions for qeuestionnaire
* record user responses for questionnaire
* make it clear on loading page that you will complete 2 versions, perhaps show images of 2 conditions on loading page
    * show that questionnaire will contribute to the personalized one
    * one personalized one non-personalized
    * make it clear which one they're using
    * on email page, have 2 icons, one high and low synergy, and highlight the one being used
* in tutorial/reminder blurb, include that we are going to use questionnaire data
* in loading page, indicate: personalization undergoing/completed
* add transition between two conditions: pause screen "pause, you're halfway through the experiment, going to startt working with other condition"
* add progress number in email, like you are on number 2/8
* embed "qualtrics" questionnaire after each phase
* implement d' encoding
    * correct/incorrect words dictionary


## Edits 8/4 meeting
* questionnaire
    * for instruction, make text larger
    * center everything
* on break page add timer, if they don't click next in a min, automatically move forward, tell the user
* percieved interactivity
    * think of ways to make percieved interactivity more pronounced, for bouncing bubbles, maybe add color, or have rotating green arrow
    * in tutorial, can describe what the thought bubbles do 
    * in tutorial can have popups that describe features of the interface and hold their hand, make interactive if possible
* track time spent on all pages (including tutorial page)

## Updates
* instructions for ringgo should be identical to smart predictor
* made typing indicator bigger and green
* created database tables to log user input for questionnaires and manipulation checks
* when mentioning name of algorithm (smart predictor/ringo), make it bold

* shuffle order of questionnaires elements within each page and surveys


## 8/16 meeting (for pretest thingy)
* questionnaire*
    * center everything
    * log when radios are not clicked also or force them to click
* survey
    * center everything
    * randomize items not pages
* break
    * add timer, will move to next page after 1 min automatically
* high synergy page
    * change typing indicator green color
* for email pages
    * record page load time
* progress bar

## Completed
* place 1st manipulation check after first tutorial transition
    * add retry text popup
* page m1: s/did/willj
* consent 
    * remove mturk references
    * remove cost/payments section
    * remove confidentiality section
    * s/Professor/Dr.
* replace ringgo with cs predictor