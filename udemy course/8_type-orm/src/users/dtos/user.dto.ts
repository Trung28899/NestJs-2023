import { IsString, IsEmail } from 'class-validator';
/*
    the @Expose() decoration means: do share certain propeties, 
    it is the opposite of @Exclude()
*/
import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
