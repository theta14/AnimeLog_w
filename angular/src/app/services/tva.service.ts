import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Tva } from 'src/app/models/tva';

@Injectable({
  providedIn: 'root'
})
export class TvaService {

  constructor(
    private http: HttpClient
  ) { }

  getTvas(): Observable<Tva[]> {
    return this.http.get<Tva[]>('/api/tvas').pipe();
  }

  getTva(_id: string): Observable<Tva> {
    return this.http.get<Tva>(`/api/tvas/${_id}`).pipe();
  }

  addTva(tva: Tva): Observable<Tva> {
    return this.http.post<Tva>('/api/tvas', tva).pipe();
  }

  modifyTva(tva: Tva): Observable<Tva | any> {
    return this.http.put<Tva | any>(`/api/tvas/${tva._id}`, tva).pipe();
  }

  removeTva(_id: string, series: number, sequence: number): Observable<any> {
    return this.http.delete(`/api/tvas/${_id}/${series}/${sequence}`).pipe();
  }

  count(): Observable<number> {
    return this.http.get<number>(`/api/tvas/count`).pipe();
  }

  getRandom(): Observable<Tva> {
    return this.http.get<Tva>('/api/tvas/random').pipe();
  }

}
