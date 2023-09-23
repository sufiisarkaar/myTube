import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {
    let protocol = req.protocol   ;
    console.log("This is global Middeleware", protocol);
    
    next();
  }
}
