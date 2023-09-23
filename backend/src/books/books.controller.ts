import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Book } from './book.dto';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/findAll')
  getAllBooks() : Book[]{
    return this.booksService.findAllBooks();
  }


  @Put('/update')
  updateBooks(@Body() book : Book) : string{
    return this.booksService.updateBookService(book);
  }


  @Post('/addBook')
  addBooks(@Body() book : Book) : string{
    return this.booksService.addBookService(book);
  }

  @Delete('/delete/:id')
  deleteBooks(@Param("id") bookId : string) : string{
    return this.booksService.deleteBookService(bookId);
  }

}
