import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // Prevents hackers from spamming other values in dto
      // If user passes more request body data than is needed
      // whitelist will remove the data that is not specified
      // in the given dto
      whitelist: true,
    }),
  );

  await app.listen(3333);
}
bootstrap();
