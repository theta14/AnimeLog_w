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
    return this.http.get<Searched[]>(`/api/searches/${option}/${text}`).pipe();
  }

  mal(mal_id: number): Observable<MalSearched> {
    return this.http.get<MalSearched>(`/api/searches/mal_id/${mal_id}`).pipe();
  }

  namuwiki(text: string): string {
    // return `/api/searches/namuwiki/${encodeURI(text)}`;
    return `https://namu.wiki/search/${encodeURI(text)}`;
  }

  namuwiki_icon(): string {
    return 'import_contacts';
  }

  namuwiki_label(): string {
    return '나무위키';
  }

}
