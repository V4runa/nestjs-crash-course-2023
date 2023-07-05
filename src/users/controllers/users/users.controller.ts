import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Varuna', email: 'Varunanda@akash.com' }];
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'Varuna',
        email: 'Varunanda@akash.com',
        posts: [
          {
            id: 1,
            title: 'post 1',
          },
          {
            id: 2,
            title: 'post 1',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUserComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
    ];
  }
}
