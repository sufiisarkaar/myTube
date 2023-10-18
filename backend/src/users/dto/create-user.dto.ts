import { IsEmail, IsString } from "class-validator";
import { Unique } from "typeorm";

export class CreateUserDto {
  
  
    @IsString()
     name: string;
  
    @IsEmail()
     email: string;

     @IsString()
     number: string;
  
     @IsString()
     password: string;
 
}
