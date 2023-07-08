import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleMiddleware } from './middlewares/another-middle/another-middle.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddleware)
      .forRoutes('users')
      .apply(AnotherMiddleMiddleware)
      .forRoutes('users');
  }
}
