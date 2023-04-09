import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [ProductsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
