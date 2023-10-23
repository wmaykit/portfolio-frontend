import { PlayerModel } from './player.model';
import { CarriageModel } from './carriageModel';

export interface GameResultModel {
  players: PlayerModel[]
  memory: string[]
  carriages: CarriageModel
  events: Object[]
}