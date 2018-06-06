Fullstack-dms
=================
[![Build Status](https://travis-ci.org/andela-aawa/fullstack-dms.svg?branch=staging)](https://travis-ci.org/andela-aawa/fullstack-dms)
[![Code Climate](https://codeclimate.com/repos/58d66e5fd315de027d00160e/badges/476cf2c94d6f0ed1a4ab/gpa.svg)](https://codeclimate.com/repos/58d66e5fd315de027d00160e/feed)
[![Coverage Status](https://coveralls.io/repos/github/andela-aawa/fullstack-dms/badge.svg?branch=staging)](https://coveralls.io/github/andela-aawa/fullstack-dms?branch=staging)
[![Issue Count](https://codeclimate.com/repos/58d66e5fd315de027d00160e/badges/476cf2c94d6f0ed1a4ab/issue_count.svg)](https://codeclimate.com/repos/58d66e5fd315de027d00160e/feed)

`Fullstack-dms` is an application that helps users manage their documents in an organized way. A User can be able to upload a document, edit it and share it with other users. Aside from enabling users to properly document their work with regard to category, the application permits users to work collaboratively on documents.

Fullstack-dms API.
------------------------------
Document Management System provides a restful API for users to create and manage documents. Employing token-based authentication to identify users and Role-based authorisation to grant users different level of access.

Document Management System API is built with JavaScript (ES6), Node.js, Express, Postgresql and Sequelize ORM. 

[Click here](https://andela-aawa.github.io/fullstack-dms/.) to view the API documentation.

Features
-----------
- Sign up/Login
- create document
- Delete a document
- Edit a document
- View other peoples public documents
- Search for documents (real time)
- With admin access you can change user roles, and delete users


Installation
------------------
Follow the steps below to setup a local development environment. First ensure you have [Postgresql](https://www.postgresql.org/) installed, and a version of [Node.js](http://nodejs.org/) equal or greater than v6.8.0.

1. Clone this repository from a terminal `git clone git+https://github.com/andela-aawa/fullstack-dms.git`.
1. Move into the project directory `cd fullstack-dms`
1. Install project dependencies `npm install`
1. Create Postgresql database and run migrations `npm run db:setup`.
1. Create an `.env` file and set the variables in `.env-sample` to your specified database connection.
1. Start the express server `npm start`.
1. Create test database and run migrations `npm run db:setup:test`
1. Run test `npm test`.

Contributing
------------
If you are planning on contributing to DMS, that's great. We welcome contributions. Just fork the repo and raise a PR.