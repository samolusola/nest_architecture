import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpExceptionFilter } from '../filters/http-exception-filter';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getUsers() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getUserById(userId);
  }
}
