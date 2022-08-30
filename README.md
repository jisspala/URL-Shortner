## URL-Shortner

URL-Shortener service is providing APIs to make url short. It has two endpoints, /encode and /decode.

**-/encode** endpoint will accept a url and return back it’s encoded form
**-/decode**  endpoint will accept encoded-url and return back it's original form


## Technical overview
We are using **Node.js** with **Typescript** to create APIs. To generate API routes we are using the **express.js** framework. For code validation, we are using **eslint**. To make a bug-free app, we should have unit, integration and end-to-end testing. For the test, we are using **jest and supertest**. To generate API docs and test APIs by manual we are using **Swagger**. To manage and store logs effectively we are using **pino**. For schema level validations we are using **joi** . To make the dev process easy we are using **nodemon**. To manage different environments we are using **dotenv**

## How to start
1. Install all dependencies : `npm install `
2. Start server: `npm run start `
3. or Start server in Dev mode : `npm run dev `
4. Swagger doc will be avialable at http://localhost:3000/api-docs 

## How to Test
1. To run all tests : `npm run test `
2. To get  tests coverage  `test:coverage `
3. To run all integration tests : `npm run test:integration ` 
4. To run all end-to-end tests : `npm run end-to-end ` 

## How to Build

1. To build app : `npm run build `
2. To start server: `npm run start `
3.  Swagger doc will be avialable at http://localhost:3000/api-docs 

### Note
Before going to production please don't forget to update **.env.production** file with correct production env values


