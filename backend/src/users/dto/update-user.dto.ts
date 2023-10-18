import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    
    @IsString()
    name: string;
 
   @IsEmail()
    email: string;

    @IsString()
    number: string;
 
    @IsString()
    password: string;
 

}
