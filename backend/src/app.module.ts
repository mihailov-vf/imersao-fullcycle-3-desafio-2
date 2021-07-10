import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesController } from './routes/routes.controller';
import { RoutesService } from './routes/routes.service';

@Module({
  controllers: [AppController, RoutesController],
  providers: [AppService, RoutesService],
})
export class AppModule {}
