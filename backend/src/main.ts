import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: '*', // Replace with your allowed origin
    methods: 'GET,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Authorization',
  }));
  await app.listen(3000);
}
bootstrap();
