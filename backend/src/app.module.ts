import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { GlobalMiddleware } from './global/global.middleware';


@Module({
  imports: [BooksModule],
  controllers: [AppController,BooksController],
  providers: [AppService,BooksService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
   consumer.apply(GlobalMiddleware).forRoutes("books");
  }
 
}
