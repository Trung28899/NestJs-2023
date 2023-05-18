import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
/*
    scrypt is a hash function

    scrypt is an asynchronous task but doesn't return a promise
    so you cannot use async await. We use promisify to make scrypt
    return a promise so that we're able to use async await with scrypt
*/
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    // Step 1: See if email is in use
    const users = await this.userService.find(email);
    if (users.length) {
      throw new BadRequestException('Email in use');
    }

    // Step 2: Hash the users password
    // Step 2.1: Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Step 2.2: Hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Step 2.3: Join the hashed and result and the salt together
    const result = salt + '.' + hash.toString('hex');

    // Step 3: Create a new user and save it
    const user = await this.userService.create(email, result);

    // Step 4: Return the user
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) {
      throw new BadRequestException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    }

    return user;
  }
}
