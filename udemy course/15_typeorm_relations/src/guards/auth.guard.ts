import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  // context is very similar to the req in express.js
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    /*
        This function will return a boolean value
        If there is value in request.session.userId > return true
        If there is no value > return false > Not authorized
    */
    return request.session.userId;
  }
}
