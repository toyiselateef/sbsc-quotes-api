# sbsc-quotes-api

The main purpose of this repository is to show a simple microservice that uses provides quotes on request to logon users. The Rest APIs will be using the Swagger (OpenAPI) Specification, and reads from json file to authenticate users.

## Environment vars

This project uses the following environment variables:

| Name         | Description                         | Default Value |
| ------------ | ----------------------------------- | ------------- |
| CORS         | Cors accepted values                | "\*"          |
| DATABASE_URL | database conncetion strings         |               |
| NODE_ENV     | used to determine dev/prod behavior |               |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 16.8.0

# Getting started

- Clone the repository

```
git clone  https://github.com/toyiselateef/sbsc_quotes_api.git
```

- Install dependencies

```
cd musalasoft-gateway-api
npm install
```

- generate swagger spec file

```
npm run swagger-autogen
```

- run the project

```
npm run start
```

Navigate to `http://localhost:3002`

- API Document endpoints

swagger-ui Endpoint : http://localhost:3002/docs

## Project Structure

The folder structure of this app is explained below:

| Name                | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| **node_modules**    | Contains all npm dependencies                                                    |
| **public**          | Contains static files to be served                                               |
| **src**             | Contains source code that will be compiled to the dist dir                       |
| **src/config**      | Database configuration, basically json file to be read from                      |
| **src/controllers** | defined Controllers functions to serve the projects' various routes routes.      |
| **src/services**    | Express services/functions to serve various controllers                          |
| **src/models**      | Mongoose schema for Gateway and Pheripheral devices                              |
| **src/routes**      | Contain express routes ('/' and '/:id'), separated by module/area of application |
| **src**/index.js    | Entry point to the API                                                           |
| package.json        | Contains npm dependencies as well as                                             |

## Building the project

### Running the build

Run and build MMK API with the following scripts:

| Npm Script        | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `start`           | Runs full build and runs node on dist/server.js. Can be invoked with `npm start`                                                     |
| `devStart`        | Full build. Runs ALL build tasks with all watch tasks. Can be invoked with `npm run devstart`                                        |
| `swagger-autogen` | Runs swagger autogen and generates the swagger.json in the public static files folder. Can be invoked with `npm run swagger-autogen` |

# Swagger

## Specification

The swagger specification file is located in the static folder ("public") as swagger.json.

# Common Issues

## npm install fails

The current solution has an example for using a private npm repository. if you want to use the public npm repository, remove the .npmrc file.

## database connection error

The database needs to be up and running, also if theres ip whitelisting on your database ensure to whitelist the server hosting this api's ip address(es)
