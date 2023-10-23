import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushSwapApiService {

  constructor(private readonly http: HttpClient) {
  }

  readonly getSortCommandsForStack = (numbers: number[]): Observable<string[]> =>
    this.http.post<string[]>('/api/push-swap', numbers)
}