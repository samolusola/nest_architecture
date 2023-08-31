import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly users = [];

  getUsers() {
    return this.users;
  }

  createUser(payload: CreateUserDto) {
    const newUser = {
      id: Date.now(),
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  getUserById(userId: number) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) return {};
    return user;
  }
}
