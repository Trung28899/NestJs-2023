import { Injectable } from '@nestjs/common';
import { Account } from './accounts.model';

@Injectable()
export class AccountService {
  private accounts: Account[] = [];

  insertAccounts(email: string, password: string) {
    const accountId = Math.random().toString();
    const newAccount = new Account(accountId, email, password);
    this.accounts.push(newAccount);
    return accountId;
  }

  getAccounts() {
    return [...this.accounts];
  }
}
