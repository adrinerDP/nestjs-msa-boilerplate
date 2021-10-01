import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@infrastructure/database/database.module';
import { HealthCheckModule } from '@app/health-check/health-check.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, HealthCheckModule],
  providers: [],
})
export class AppModule {}
