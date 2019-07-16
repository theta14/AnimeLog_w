import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Watching } from 'src/app/models/watching';

@Injectable({
  providedIn: 'root'
})
export class WatchingService {

  constructor(
    private http: HttpClient
  ) { }

  getWatchings(): Observable<Watching[]> {
    return this.http.get<Watching[]>('/api/watchings').pipe();
  }

  getWatching(_id: string): Observable<Watching> {
    return this.http.get<Watching>(`/api/watchings/${_id}`).pipe();
  }

  addWatching(watching: Watching): Observable<Watching> {
    return this.http.post<Watching>('/api/watchings', watching).pipe();
  }

  modifyWatching(watching: Watching): Observable<Watching> {
    return this.http.put<Watching>('/api/watchings', watching).pipe();
  }

  removeWatching(_id: string): Observable<any> {
    return this.http.delete(`/api/watchings/${_id}`).pipe();
  }

}
