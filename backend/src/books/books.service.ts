import { Injectable } from '@nestjs/common';
import { Book } from './book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  public books : Book[] = [];
  
//add Book
addBookService(book :Book): string{
  book.id = uuidv4();
  this.books.push(book);
  return "Books Has Been Successfully Added";
}


//update Book
updateBookService(book :  Book){
  let index = this.books.findIndex((currentBook)=>{
    return currentBook.id == book.id;
  })
  this.books[index] = book;
  return "Books has successfully updated";
}


//delete Book
deleteBookService(bookId : string){
this.books = this.books.filter((book)=>{
  return book.id != bookId;
});
return "Books Has Been Deleted";
}


//findAll Book
findAllBooks() : Book[] {
  return this.books;
}

}
