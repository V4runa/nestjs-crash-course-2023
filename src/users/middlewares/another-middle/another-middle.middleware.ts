import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AnotherMiddleMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Another Middleware');
    next();
  }
}
