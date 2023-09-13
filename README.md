# Introduction

Microservice for property information in Yggdrasil.

## Installation

1. Make a copy of .env.template, call it .env
2. Fill out values in .env. (see below)
3. Install nvm
4. Install required version of node: `nvm install`
5. Use required version of node `nvm use`
6. Install packages: `npm run install`
7. Start database engine (SQL Server): `docker compose up -d &`
8. Create a database called `property-info`
9. Create database structure: `npm run migrate:up`
10. Create test data: `npm run seed`

## Development

Start the development server: `npm run dev`

## Env

- DATABASE\_\_PASSWORD - password for database
- DATABASE\_\_HOST - "localhost" for local dev environment
- DATABASE\_\_USER - database username, default "sa"
- DATABASE\_\_DATABASE=properties
- DATABASE\_\_PORT=1433
