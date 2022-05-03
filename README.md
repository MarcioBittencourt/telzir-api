<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

This project was developed for the test of the company LOLDESIGN.
Make sure you have Docker, Docker-compose, NodeJS v16.13.2, Yarn dependencies on your machine.
After having the application working, use the front-end project or applications to test requests in REST API's such as Insomnia or Postman.

## Installation


```bash
#Install project dependencies
$ yarn install

#At the root of the project run the command to start the database service.
$ docker-compose up –d

#After the database is created, run the command to create the tables.
$ npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
