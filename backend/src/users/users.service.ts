import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()



export class UsersService {

  constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>) {
  }

  create(createUserDto: CreateUserDto) {

    let user = new Users;
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.number = createUserDto.number;
    user.password = createUserDto.password;
    let userCreated = this.userRepository.save(user);
    if (userCreated) {
      return { "Success": "User Has Been Created Successfully", "User": user }
    } else {
      return { "Error": "Please Provide Info." }
    }
  }

  async findAll() {
    let users = await this.userRepository.find();
    if (users) {
      return { "Success": "Users Find", "Users": users }
    } else {
      return { "Error": "No users at this time" }
    }
  }

  async findOne(id: number) {
    let user = await this.userRepository.findBy({ 'id': id });
    if (user) {
      return { "Success": "User Find", "User": user };
    } else {
      return { "Error": "Invalid user Id" };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    const userUpdated = await this.userRepository.findBy({ 'id': id });
    if (userUpdated) {
      return { "Success": "User Updated", "User": userUpdated };
    } else {
      return { "Error": "Invalid User Id" };
    }
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
