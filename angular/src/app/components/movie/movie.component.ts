import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { TvaService } from 'src/app/services/tva.service';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = null;

  constructor(
    private movieService: MovieService,
    private tvaService: TvaService,
    private route: ActivatedRoute
  ) {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.movies.sort((a: Movie, b: Movie) => {
        return a.category.localeCompare(b.category);
      });
      setTimeout(() => this.scrollToElement(), 500);
    });
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      let idx = -1;
      for (let i=0; i<this.movies.length; i++) {
        if ( this.movies[i]._id == _id ) {
          idx = i;
          break;
        }
      }
      if ( idx == -1 ) return;
      this.clickMovie(idx, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
      let element: HTMLElement = document.getElementById('movie' + idx);
      try {
        element.scrollIntoView();
      } catch(e) {
        alert('알 수 없는 에러가 발생하였습니다.\n' + e);
      }
    }
  }

  ngOnInit() {
  }

  getRvTitle(title: {eng: string, kor: string, jpn: string, rv: string}): string {
    return eval(`title.${title.rv}`);
  }

  clickMovie(m: number, series: number, sequence: number) {
    let opened = {series: series, sequence: sequence, linked: null};
    if ( this.movies[m].opened ) {
      if ( this.movies[m].opened.series != series || this.movies[m].opened.sequence != sequence ) {
        opened.linked = this.movies[m].opened.linked;
        this.movies[m].opened = opened;
      } else this.movies[m].opened = null;
      return;
    }
    this.movies[m].opened = opened;
    this.setLinkedTva(m, this.movies[m].category_tva, this.movies[m].series[series].key);
  }

  private setLinkedTva(m: number, tva_id: string, key: string) {
    if ( this.movies[m].opened.linked ) return;
    this.tvaService.getTva(tva_id).subscribe(tva => {
      for (let i=0; i<tva.series.length; i++) {
        if ( tva.series[i].key == key ) {
          this.movies[m].opened.linked = {
            title: tva.series[i].title,
            _id: tva._id,
            series: i
          };
          return;
        }
      }
    });
  }

}
