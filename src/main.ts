import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT_NUMBER = 3000;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT_NUMBER);
  console.log('application started on port ', PORT_NUMBER);
}
bootstrap();
