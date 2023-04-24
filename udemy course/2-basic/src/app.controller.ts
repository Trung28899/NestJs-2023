import { Controller, Get } from "@nestjs/common";

@Controller("/app")
class AppController {
  // route: localhost:3000/app
  @Get()
  getRootRoute() {
    return "hi there";
  }

  // route: localhost:3000/app/hello
  @Get("/hello")
  getHelloRoute() {
    return "Hello My Brother";
  }
}

export default AppController;
