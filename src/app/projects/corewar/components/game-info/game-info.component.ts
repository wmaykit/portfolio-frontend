import { Component, Input, OnInit } from '@angular/core';
import { PlayerModel } from '../../models/player.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'portfolio-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  cycle: number = 1
  processes: number = 0
  cycleToDie: number = 0
  cycleDelta: number = 0
  nbrLive: number = 0
  maxChecks: number = 0
  winnerChampion: PlayerModel | undefined
  @Input() players: PlayerModel[] = []

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    // this.winnerPlayer = { name: 'Artyom' } as PlayerModel
  }

  openEditor() {
    this.router.navigate(['corewar-code-editor']);
  }

}
