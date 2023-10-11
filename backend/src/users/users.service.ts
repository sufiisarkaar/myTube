import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}

export class UsersService {
  
  constructor(private readonly userRepository: UserRepository){
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.update(id, updateUserDto);
    return this.userRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
