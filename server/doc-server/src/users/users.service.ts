import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly usersModel: Model<User>) {}

  async insertUser(username: string, password: string, visits: object[]) {
    const newUser = new this.usersModel({ username, password, visits });
    return await newUser.save();
  }

  async fetchUsers() {
    const users = await this.usersModel.find().exec();

    return users.map((user) => ({
      id: user.id,
      username: user.username,
      password: user.password,
      visits: user.visits,
    }));
  }

  async fetchOneUser(userId: string) {
    const aUser = await this.findUser(userId);
    return {
      id: aUser.id,
      username: aUser.username,
      password: aUser.password,
      visits: aUser.visits,
    };
  }

  async updateUser(
    userId: string,
    username: string,
    password: string,
    visits: object[],
  ) {
    const updatedUser = await this.findUser(userId);

    if (username) {
      updatedUser.username = username;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (visits) {
      updatedUser.visits = visits;
    }

    updatedUser.save();
  }

  async removeUser(userId: string) {
    this.usersModel.deleteOne({ _id: userId }).exec();
  }

  private async findUser(userId: string): Promise<User> {
    let aUser;

    try {
      aUser = await this.usersModel.findById(userId);
    } catch (err) {
      throw new Error('Not Found');
    }

    if (!aUser) {
      throw new Error('User not found');
    }

    return aUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.usersModel.find().exec();
    return users.find((user) => user.username === username);
  }
}
