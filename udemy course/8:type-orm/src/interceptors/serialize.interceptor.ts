import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

// custom decorator
export function Serialize(dto: any) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

// search for differences between implements vs extends
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler (put any code that run before the handler down below)
    // console.log('Running interceptor before the handler');
    // context contains information about the request
    // console.log(context)

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the responses is sent out
        // (put any code that run before the response is sent out here)
        // console.log('Running interceptor before response is sent out');
        // data contains information about the response
        // console.log(data);

        // turning data into an instance of the UserDto
        return plainToClass(this.dto, data, {
          // this property exclude the properties
          // that aren't marked as Exposed in the DTO
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
