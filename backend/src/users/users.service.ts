import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) {
  }

 async create(createUserDto: CreateUserDto) {

    let user = new Users;
    // user.id =  uuidv4();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.number = createUserDto.number;
    user.password = createUserDto.password;
   await this.userRepository.save(user);

      return { "Success": "User Has Been Created Successfully", "User": user }
   
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
   return await this.userRepository.findBy({ 'id': id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
