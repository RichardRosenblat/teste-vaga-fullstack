import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { health: string } {
    return { health: 'ok' };
  }

  getEnv(): { envFile: string } {
    return { envFile: process.env.ENVFILE };
  }
}
