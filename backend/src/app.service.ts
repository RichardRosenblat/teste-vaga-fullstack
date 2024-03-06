import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { health: string } {
    return { health: 'ok' };
  }
}
