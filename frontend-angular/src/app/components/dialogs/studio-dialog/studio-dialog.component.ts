import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemTitle } from 'src/app/models/item';
import { TvaService } from 'src/app/services/tva.service';
import { MovieService } from 'src/app/services/movie.service';
import { Tva, TvaSequence } from 'src/app/models/tva';
import { Movie, MovieSequence } from 'src/app/models/movie';
import { Completion } from 'src/app/models/completion';

@Component({
  selector: 'app-studio-dialog',
  templateUrl: './studio-dialog.component.html',
  styleUrls: ['./studio-dialog.component.css']
})
export class StudioDialogComponent {
  private static source: {
    tvas: Tva[],
    movies: Movie[]
  } = undefined;
  tvas: StudioDialogItem[] = [];
  movies: StudioDialogItem[] = [];

  constructor(
    public dialogRef: MatDialogRef<StudioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private tvaService: TvaService,
    private movieService: MovieService
  ) {
    if ( !StudioDialogComponent.source ) {
      StudioDialogComponent.source = {tvas: undefined, movies: undefined};
      this.tvaService.getTvas().subscribe(tvas => this.itemsToArray(StudioDialogComponent.source.tvas = tvas, this.tvas, true));
      this.movieService.getMovies().subscribe(movies => this.itemsToArray(StudioDialogComponent.source.movies = movies, this.movies));
    } else {
      this.itemsToArray(StudioDialogComponent.source.tvas, this.tvas, true);
      this.itemsToArray(StudioDialogComponent.source.movies, this.movies);
      this.tvaService.getTvas().subscribe(tvas => StudioDialogComponent.source.tvas = tvas);
      this.movieService.getMovies().subscribe(movies => StudioDialogComponent.source.movies = movies);
    }
  }

  private itemsToArray(items: Completion[], arr: StudioDialogItem[], isTva?: boolean) {
    for (let item of items) {
      for (let [i, series] of item.series.entries()) {
        for (let [j, sequence] of series.sequences.entries()) {
          if ( sequence.studios.includes(this.data) ) {
            arr.push({
              title: sequence.title,
              _id: item._id,
              series: i,
              sequence: j,
              date: isTva ? (<TvaSequence> sequence).aired.start : (<MovieSequence> sequence).aired
            });
          }
        }
      }
    }
    arr.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime() });
  }

  onClose() {
    this.dialogRef.close();
  }

  getLink(url: string, item: StudioDialogItem): string {
    // if ( item.moreParams ) link += ((arr: any[]): string => { let result = ''; for (let each of arr) result += `/${each}`; return result; })(item.moreParams);
    return `/${url}/${item._id}/${item.series}/${item.sequence}`;
  }

  getFormattedDate(date: string): string {
    let d = new Date(date);
    let f = (n: number): string => { if ( n == 0 ) n = 1; return n < 10 ? '0' + n : n.toString() };
    return `'${d.getFullYear().toString().substr(2, 2)}.${f(d.getMonth())}.${f(d.getDate())}`;
  }

  yearChanged(i: number): boolean {
    if ( i == 0 ) return false;
    let before = new Date(this.tvas[i-1].date);
    let after = new Date(this.tvas[i].date);
    return before.getFullYear() != after.getFullYear();
  }

}

interface StudioDialogItem {
  _id: string,
  title: ItemTitle,
  series: number,
  sequence: number,
  date: string
}
