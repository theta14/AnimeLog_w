import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Watching, WatchingVideo, WatchingSubtitle, Ohys } from 'src/app/models/watching';
import { Ohli } from '../models/ohli';
import { IncompletionService } from '../models/incompletionService';

@Injectable({
  providedIn: 'root'
})
export class WatchingService implements IncompletionService {

  constructor(
    private http: HttpClient
  ) { }

  get(_id: string): Observable<Watching> { return this.getWatching(_id) }
  remove(_id: string): Observable<Watching> { return this.removeWatching(_id) }

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
    return this.http.put<Watching>(`/api/watchings/${watching._id}`, watching).pipe();
  }

  removeWatching(_id: string): Observable<any> {
    return this.http.delete(`/api/watchings/${_id}`).pipe();
  }

  /**
   * @param year year when the animation ended, it is not needed when it is being aired
   */
  ohli(title: string, year?: number): Observable<Ohli[]> {
    return this.http.get<Ohli[]>(year ? `/api/watchings/ohlis/${year}/${title}` : `/api/watchings/ohlis/airing/${title}`).pipe();
  }

  getVideos(title: string): Observable<WatchingVideo[]> {
    return this.http.get<WatchingVideo[]>(`/api/watchings/airing/videos/${title}`).pipe();
  }

  getOhys(title: string): Observable<Ohys[]> {
    return this.http.get<Ohys[]>(`/api/watchings/airing/ohys/${title}`).pipe();
  }

  getSubtitles(ohli_id: number): Observable<WatchingSubtitle[]> {
    return this.http.get<WatchingSubtitle[]>(`/api/watchings/airing/subtitles/${ohli_id}`).pipe();
  }

  count(): Observable<number> {
    return this.http.get<number>(`/api/watchings/count`).pipe();
  }

  getRandom(): Observable<Watching> {
    return this.http.get<Watching>('/api/watchings/random').pipe();
  }

}
