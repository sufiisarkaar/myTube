import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  Users } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '123456',
    username: 'postgres',
    entities: [
      Users
    ],
    database: 'myTube',
    synchronize: true,
    logging: true,
  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

 
}
