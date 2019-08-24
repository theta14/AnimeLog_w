import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/api/movies').pipe();
  }

  getMovie(_id: string): Observable<Movie> {
    return this.http.get<Movie>(`/api/movies/${_id}`).pipe();
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('/api/movies', movie).pipe();
  }

  modifyMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`/api/movies/${movie._id}`, movie).pipe();
  }

  removeMovie(_id: string, series: number, sequence: number): Observable<any> {
    return this.http.delete(`/api/movies/${_id}/${series}/${sequence}`).pipe();
  }

  count(): Observable<number> {
    return this.http.get<number>(`/api/movies/count`).pipe();
  }

  getRandom(): Observable<Movie> {
    return this.http.get<Movie>('/api/movies/random').pipe();
  }

}
