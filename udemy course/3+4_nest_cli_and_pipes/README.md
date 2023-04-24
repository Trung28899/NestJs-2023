# Section 3: Generating Projects with the Nest CLI

- Install nest cli globally:
  '$ sudo npm install -g @nestjs/cli'

- Create a new nest.js app with nest.js cli:
  '$ nest new app_name'

- Generate a new module:
  '$ nest generate module module_name'

- Generate a new controller (example):
  '$ nest generate controller messages/messages --flat'

# Section 4: Validating Request Data with Pipes

- About HTTP Request and Nest.js Decorators:
  - See this note:

https://hackmd.io/@jPFZk5X1QHSaAUmKUmRGVg/S1cOAqkzh

- Commands:
  '$ npm install --save class-validator class-transformer'

## How to setup Automatic Validation:

- Step 1: Tell Nest to use global validation

  - See main.ts to see how to tell nest to use global validation

- Step 2: Create a class that describe the different properties that the request body should have

  - The class that we refer to is called: Data Transfer Object or DTO

- Step 3: Add validation rules to the class

  - See step 2 and step 3 in /src/messages/dtos/create-message.dto.ts
  - Note here that 2 packages needed to be installed: class-validator and class-transformer
  - Detail of how these 2 classes work -> see video 19 and 20

- Step 4: Apply that class to the request handler:
  - See the message.controller.ts file to see how CreateMessageDto is imported and applied
