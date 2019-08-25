import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Searched, MalSearched } from 'src/app/models/searched';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(text: string, option: string): Observable<Searched[]> {
    return this.http.get<Searched[]>(`/api/searches/${option}?text=${text}`).pipe();
  }

  mal(mal_id: number): Observable<MalSearched> {
    return this.http.get<MalSearched>(`/api/searches/mal/${mal_id}`).pipe();
  }

}
