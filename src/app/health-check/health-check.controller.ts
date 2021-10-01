import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthCheckController {
  @Get()
  async responseToHeartbeat(): Promise<boolean> {
    return true;
  }
}
