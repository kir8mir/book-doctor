import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addDoc(
    @Body('username') userName: string,
    @Body('password') userPassword: string,
    @Body('visits') usersVisits: object[],
  ): any {
    return this.usersService.insertUser(userName, userPassword, usersVisits);
  }

  @Get()
  async getAllUsers() {
    return await this.usersService.fetchUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.fetchOneUser(userId);
  }

  @Patch(':id')
  async updateDoc(
    @Param('id') userId: string,
    @Body('username') userName: string,
    @Body('password') userPassword: string,
    @Body('visits') usersVisits: object[],
  ) {
    return await this.usersService.updateUser(
      userId,
      userName,
      userPassword,
      usersVisits,
    );
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string) {
    return await this.usersService.removeUser(userId);
  }
}
