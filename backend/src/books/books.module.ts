import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BooksMiddleware } from './books.middleware';
import { FirstMiddleware } from 'src/first/first.middleware';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
  consumer.apply(BooksMiddleware, FirstMiddleware).forRoutes('books');
  }


}
