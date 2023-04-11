import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { UsersService } from './users.service';
import {
  SerializeInterceptor,
  Serialize,
} from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  // @UseInterceptors(ClassSerializerInterceptor) works with @Exclude()
  // in user.entity.ts to exclude a property
  // @UseInterceptors(SerializeInterceptor) apply the custom interceptor to this route (commit: "serialization in the Interceptor")
  // @UseInterceptors(SerializeInterceptor)
  @Serialize(UserDto)
  @Get('/:id')
  findUser(@Param('id') id: string) {
    console.log('Handler is running');
    return this.userService.findOne(parseInt(id));
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
