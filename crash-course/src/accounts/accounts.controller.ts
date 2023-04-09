import { Body, Controller, Post, Get } from '@nestjs/common';
import { AccountService } from './accounts.service';

@Controller('/accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  addAccount(
    @Body('email') accountEmail: string,
    @Body('password') accountPassword: string,
  ): any {
    const generatedId = this.accountService.insertAccounts(
      accountEmail,
      accountPassword,
    );

    return {
      id: generatedId,
    };
  }

  @Get()
  getAllAccounts() {
    const allAccounts = this.accountService.getAccounts();
    return { accounts: allAccounts };
  }
}
