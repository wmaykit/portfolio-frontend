import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameResultModel } from '../models/game-result.model';
import { RequestForAsmModel } from '../models/request-for-asm.model';
import { AsmResultModel } from '../models/asm-result.model';

@Injectable({
  providedIn: 'root'
})
export class CorewarHttpService {

  constructor(private readonly http: HttpClient) {
  }

  readonly getCorewarGameResult = (): Observable<GameResultModel> =>
    this.http.get<GameResultModel>('/api/corewar')

  readonly compileChampion = (championData: RequestForAsmModel): Observable<AsmResultModel> =>
    this.http.post<AsmResultModel>('/api/corewar/asm', championData)
}
