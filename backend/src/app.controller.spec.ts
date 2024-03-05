import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return health ok', () => {
      expect(appController.getHealth()).toMatchObject({ health: 'ok' });
    });
    it('should return envfile', () => {
      const mockEnv = 'envMock';
      process.env.ENVFILE = mockEnv;

      expect(appController.getEnv()).toMatchObject({ envFile: mockEnv });
    });
  });
});
