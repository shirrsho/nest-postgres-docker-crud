import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}
  
  async create(createUserDto: CreateUserDto) {
    const { email, name } = createUserDto;
    return await this.userRepository.save({ email, name });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { email, name } = updateUserDto;
    return await this.userRepository.save({ email, name, id });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
