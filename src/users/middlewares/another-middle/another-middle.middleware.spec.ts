import { AnotherMiddleMiddleware } from './another-middle.middleware';

describe('AnotherMiddleMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherMiddleMiddleware()).toBeDefined();
  });
});
