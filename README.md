# Synergy
This is the interface for Synergy. Work in progress. 

## Requirements
* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)

## Local Start Instructions
1. Install MySQL
2. Start the MySQL CLI with `user=root` and `password=password`
3. Start a MySQL instance
4. Clone this repo: `git@github.com:austinmacmath/synergy-app.git`
5. Change directories: `cd synergy-app`
6. From the MySQL CLI, run `CREATE DATABASE synergy`
7. From the terminal, run `mysql -u root -p synergy < synergy_dump.sql`
8. Start the application:`DEBUG=synergy-app:* npm start`
9. Navigate to [localhost:3000](http://localhost:3000) in your browser for the homepage and `localhost:3000/<ID>` for the different email prompts

## To Do
* login/unique user
* check wordcount in textarea
* log tab clicks in db
* prevent user from backpaging and modifying answers
    * solution: flag user once final submission and redirect page
* render goodbye.jade on post 
* figure out how to track input from textarea in realtime and process
* hosting

