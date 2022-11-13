import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { PlayersModule } from './players/players.module';
import { ErrorMiddleware } from './middlewares/error.middleware';

@Module({
    imports: [PlayersModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
          provide: APP_FILTER,
          useClass: ErrorMiddleware,
        },
    ],
})
export class AppModule {}
