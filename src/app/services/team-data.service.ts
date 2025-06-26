import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  private dataUrl = 'assets/data/data.json';

  private teams$!: Observable<any[]>;
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any[]> {
    if (!this.teams$) {
      this.teams$ = this.http.get<any[]>(this.dataUrl).pipe(shareReplay(1));
    }
    return this.teams$;
  }
}
