import { Controller, Post, Body } from '@nestjs/common';
import { OperationResult } from 'src/interfaces/operation.result.interface';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './players.service';

@Controller('/players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) {}

    private validateIncoming (body: any): Player {
      if (!body.id) throw new Error('Player\'s ID is not defined');

      return body;
    }

    @Post('/connect')
    connect(@Body() body: Player): OperationResult {
        const playerData = this.validateIncoming(body);
        return this.playersService.connect(playerData);
    }
}
