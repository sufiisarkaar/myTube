import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/userpost')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/userget')
  findAll() {
   return this.usersService.findAll();
  
  }

  @Get('userget/:id')
  findOne(@Param('id') id: string) {
    console.log("find one");
    
    return this.usersService.findOne(id);
    
  }

  @Put('userupdate/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('userdelete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
