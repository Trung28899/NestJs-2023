import { Module } from '@nestjs/common';
import { AccountService } from './accounts.service';
import { AccountsController } from './accounts.controller';

@Module({
  controllers: [AccountsController],
  providers: [AccountService],
})
export class AccountsModule {}
