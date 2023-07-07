import { Injectable } from '@nestjs/common';
import { createUserType } from '../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Varuna', email: 'Varunanda@gmail.com' },
    { username: 'Carina', email: 'Ariathefae@gmail.com' },
    { username: 'Crowley', email: 'YourKing@Hell.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    return {
      id,
      username: 'Rowena',
      email: 'PowerGinger@CovenlessWitches.com',
    };
  }

  createUser(userDetails: createUserType) {
    return this.fakeUsers.push(userDetails);
  }
}
