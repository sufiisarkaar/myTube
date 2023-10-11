import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
     name: string;
  
    @IsEmail()
     email: string;

     @IsString()
     number: number;
  
     @IsString()
     password: string;
  
}
