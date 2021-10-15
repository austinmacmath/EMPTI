# Synergy
**THIS IS THE README FOR THE PRODUCTION APP.**<br><br>
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
Run `node make_id.js`. This will create a new random 20 digit string for a user. Find database credentials at Heroku.

## To Do
* implement biased model
* encode d'
* model should work for capital words also
* user testing

## To do 
* make predictionary work in middle of text

## To Do from 7/21 meeting
* add more isntructions for qeuestionnaire
* make it clear on loading page that you will complete 2 versions, perhaps show images of 2 conditions on loading page
    * one personalized one non-personalized
    * make it clear which one they're using
    * on email page, have 2 icons, one high and low synergy, and highlight the one being used
* add transition between two conditions: pause screen "pause, you're halfway through the experiment, going to startt working with other condition"
* add progress number in email, like you are on number 2/8
* implement d' encoding
    * correct/incorrect words dictionary


## Edits 8/4 meeting
* on break page add timer, if they don't click next in a min, automatically move forward, tell the user
* percieved interactivity
    * in tutorial, can describe what the thought bubbles do 
    * in tutorial can have popups that describe features of the interface and hold their hand, make interactive if possible
* track time spent on all pages (including tutorial page)


* shuffle order of questionnaires elements within each page and surveys


## 8/16 meeting (for pretest thingy)
* questionnaire*
    * log when radios are not clicked also or force them to click
* for email pages
    * record page load time
    * record d' actions in db table

## Aug 26 Meeting Notes
* survey and questionniare
    * add total time spent per page on survey
* questionniare
    * dont need to randomize questinniare items
* in our request response pop-up window that asks participants if they want to continue without answering the question, the two options are “cancel” and “ok”. Can we change “ok” to “continue”?
5. I am not really sure how and why this happened, but when I was testing the algorithms, sometimes I directly copies and pasted some texts to the answer box, and then deleted them and tried to type something else. Sometimes I got no suggestions afterwards. I don’t think this will happen a lot as long as participants follow our instructions. But just something to think about.

## Sept 15 meeting
* priority: transition to mturk
* find out new deadlines for cscw
* make sure window.location is inside promise then for survey pages

## Updates
* fix data collection in database (all answers were not being collected)
* set completed flag
* transition back to mturk version
* check to see if progress bar math is correct on deployed version

## 9/29 Meeting
* in cscw manuscript, include the fact that the predictive text doens't work if you write in middle of existing text
* add page after loading page
    * new page with the following language: Regardless of how frequently you use predictive text algorithms in your daily life, for this demo, we would like you to try to use the predictive text algorithms as much as possible.

## 10/6
* write sql to join all tables on a UID so that there is one gigantic table with all data
    * combine all existing data for now into one set
    * aggregate reaction time per email id per user 
    * dprime counts per smart predictor and per cs predictor
    * for excel, chunk all cs predictor data together, chunk all smart predictor data together
* pay for database upgrade
* 

