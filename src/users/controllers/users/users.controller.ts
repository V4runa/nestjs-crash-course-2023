import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [{ username: 'varuna', email: 'varunanda.com' }];
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }
}
