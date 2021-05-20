# Synergy
This is the interface for Synergy. Work in progress. 

## Requirements
* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

## Local Start Instructions
1. [Install](https://www.postgresql.org/download/) PostgreSQL
2. Start a PostgreSQL instance at `localhost:5432`
3. Create a database `synergy` 
4. Clone this repo: `git@github.com:austinmacmath/synergy-app.git`
5. Change directories: `cd synergy-app`
6. Restore the database dump: `psql synergy < synergy_dump.sql`
7. Start the application:`DEBUG=synergy-app:* npm start`
8. Navigate to [localhost:3000](http://localhost:3000) in your browser for the homepage and `localhost:3000/email/<ID>` for the different email prompts

## To Do
* login/unique user
* check wordcount in textarea
* log tab clicks in db
* prevent user from backpaging and modifying answers
    * solution: flag user once final submission and redirect page
* render goodbye.jade on post 
* figure out how to track input from textarea in realtime and process
* hosting

