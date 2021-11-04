# Synergy
**THIS IS THE README FOR THE LOCAL APP.**<br><br>
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

## To do 
* make predictionary work in middle of text
* model should work for capital words also
* in cscw manuscript, include the fact that the predictive text doens't work if you write in middle of existing text
* resume changing names starting from s1 -> survey_1


## 11/3
* separate filtered rate into synergy and non synergy for each condition
* outline for what i will put in the github
    * pose it as a proof of concept
    * its something that people can change
    * not something that they can use out of the box
    * this is what people can do with it
    * audience: research groups in other labs
        * what would they need to know to use this for use in a social experiment
* for later, try to make the algorithm "more helpful" somehow
* 