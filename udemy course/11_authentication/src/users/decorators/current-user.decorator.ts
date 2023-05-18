import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// ExecutionContext is the typing for an incoming request
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
