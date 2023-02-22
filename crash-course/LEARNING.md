# NEST.JS CRASH COURSE

# I. INTRODUCTION & SETUP:

## 1. Introduction:

- Nest.js is a node.js framework, build up on Express.js
- Nest.js Embraces TypeScript & Dependency Injection & Modularity
- Nest.js Enforces clean code and a clear project structure by giving you a series of building blocks
- Make building complex applications easy

Docs: https://docs.nestjs.com/
Crash Course: https://www.youtube.com/watch?v=F_oOtaxb0L8&ab_channel=Academind

## 2. Setup:

    $ npm i -g @nestjs/cli
    $ nest new project-name
    $ npm run start:dev

# II. ARCHITECTURE & EXAMPLE:

## 1. Architecture:

- ./src/main.ts > entry file

- Files in Nest.js are splitted by modules and features. Each modules represent a feature

- Each module should contain the following files:

  - Module.ts file:

    - this is like a central file that combines Provider and Controller.
    - You can include other module in this file.
    - This is how the whole app are connected
    - The module file export an object to be imported from a different modules

  - Controller.ts file: this file contains business logics and routing

  - Service.ts file: this file contain helper functions, async tasks, CRUD from and to the database

  - Model.ts file: this file contain the model of the object that are being used in the module

## 2. Decorators:

- @Controller() setup routes
  Example: @Controller(“/user”) > send request to /user

- @Get()

- @Put()

- @Delete()

- @Patch()

EXAMPLE OF SETTING UP ROUTING:

@Controller(“/user”)
@Get(“123”)

Endpoint is: /user/123

## 3. Example:

- Try to send requests to these routes and see the files in ./src/products
  to see how it works

POST('localhost:8000/products') > add a product
GET('localhost:8000/products') > get all products
GET('localhost:8000/products/:id') > get a single product
PATCH('localhost:8000/products/:id') > update product details
DELETE('localhost:8000/products/:id') > delete a product
