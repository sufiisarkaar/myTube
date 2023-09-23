import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BooksMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
   let protocol = req.protocol;
   let host = req.get("host");
   let url = req.originalUrl;
   let method  = req.method;
   let date = new Date().toDateString();

    next();

    console.log(protocol +"://"+ host+url+ " " +method + " " + date);
    
  }
}
