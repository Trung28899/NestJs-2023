import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // This property ensures any extra property in the request body
      // that is not listed in the DTO will be removed automatically
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
