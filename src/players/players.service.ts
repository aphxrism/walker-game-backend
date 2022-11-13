import { Injectable } from '@nestjs/common';
import { OperationResult } from 'src/interfaces/operation.result.interface';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
    private players: { [key: string]: Player } = {};

    public connect (player: Player): OperationResult {
		this.players[player.id] = player;

		return { success: true };
    }

	public disconnect (playerId: number): OperationResult {
		delete this.players[playerId];

		return { success: true };
	}

	public update (): OperationResult {
		return { success: true };
	}
}
