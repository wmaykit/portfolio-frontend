import { Component, OnInit } from '@angular/core';
import { CorewarHttpService } from '../../http/corewar-http.service';
import { GameResultModel } from '../../models/game-result.model';

@Component({
  selector: 'app-corewar',
  templateUrl: './corewar.component.html',
  styleUrls: ['./corewar.component.css']
})
export class CorewarComponent implements OnInit {
  protected gameResult: GameResultModel | undefined

  constructor(private readonly corewarHttpService: CorewarHttpService) { }

  ngOnInit(): void {
    this.corewarHttpService.getCorewarGameResult().subscribe((gameResult) => {
      this.gameResult = gameResult
    })
  }

}
