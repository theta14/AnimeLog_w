import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { TvaService } from 'src/app/services/tva.service';
import { Movie, MovieSequence } from 'src/app/models/movie';
import { ActivatedRoute } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { cloneObject, isOK, notOK } from 'src/app/models/item';
import { MatDialog } from '@angular/material';
import { SendingSearchedProtocol, MalSearched, searchedProtocolFactory } from 'src/app/models/searched';
import { SearchService } from 'src/app/services/search.service';
import { SearchDialogComponent } from '../dialogs/search-dialog/search-dialog.component';
import { Tva } from 'src/app/models/tva';
import { WatchingService } from 'src/app/services/watching.service';
import { PlanService } from 'src/app/services/plan.service';
import { HeaderAlign } from 'src/app/models/headerAlign';
import { SendingTextProtocol, TextFieldDialogComponent } from '../dialogs/text-field-dialog/text-field-dialog.component';
import { TitleService } from 'src/app/services/title.service';
import { StudioDialogComponent } from '../dialogs/studio-dialog/studio-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent extends HeaderAlign<Movie> implements OnInit {
  movies: Movie[] = null;
  movieMap: Map<string, Movie>;
  modifying: {
    studios: string,
    series: number,
    sequence: number
  } = null;
  loading: boolean = false;

  writing: boolean = false;
  writingMovie: MovieSequence;
  seriesMemo: string;
  tvas: Tva[] = null;
  linked: {
    idx: number,
    series: number
  } = {
    idx: 0,
    series: 0
  };

  from: string = undefined;
  incompletion_id: string = undefined;

  constructor(
    private movieService: MovieService,
    private tvaService: TvaService,
    private searchService: SearchService,
    private watchingService: WatchingService,
    private planService: PlanService,
    private titleService: TitleService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog
  ) {
    super([2], [5]);
    this.titleService.setTitle('극장판');
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      super.setItems([this.movies]);
      this.movieMap = new Map<string, Movie>();
      movies.map(v => this.movieMap.set(v._id, v));
      this.movies.sort((a: Movie, b: Movie) => { return a.category.localeCompare(b.category) });
      setTimeout(() => this.scrollToElement(), 500);
    });
  }

  protected getAlignment(standard: number) {
    switch(standard) {
      case 0: return (a: Movie, b: Movie) => { return a.category.localeCompare(b.category) * this.alignments[0][standard] }
      case 1: return (a: Movie, b: Movie) => { return a.series[0].title.localeCompare(b.series[0].title) * this.alignments[0][standard] }
      case 2: return (a: Movie, b: Movie) => { return a.series[0].sequences[0].title[a.series[0].sequences[0].title.rv].localeCompare(b.series[0].sequences[0].title[b.series[0].sequences[0].title.rv]) * this.alignments[0][standard] }
      case 3: return (a: Movie, b: Movie) => { return a.series[0].sequences[0].studios[0].localeCompare(b.series[0].sequences[0].studios[0]) * this.alignments[0][standard] }
      case 4: return (a: Movie, b: Movie) => { return (new Date(a.series[0].sequences[0].aired).getTime() - new Date(b.series[0].sequences[0].aired).getTime()) * this.alignments[0][standard] }
      default: return;
    }
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      this.clickMovieWithId(_id, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
      let element: HTMLElement = document.getElementById(_id);
      try {
        element.scrollIntoView();
      } catch(e) {
        alert('알 수 없는 에러가 발생하였습니다.\n' + e);
      }
    } else if ( this.route.snapshot.paramMap.get('incompletion_id') ) {
      this.writeMovie();
      this.from = this.route.snapshot.paramMap.get('from');
      this.incompletion_id = this.route.snapshot.paramMap.get('incompletion_id');
      (this.from == 'data-from-watching' ? this.watchingService : this.planService).get(this.incompletion_id).subscribe(result => {
        if ( !result._id ) {
          alert('알 수 없는 에러가 발생하였습니다.\n' + result);
          return;
        }
        if ( result.mal_id ) this.searchMovie('mal_id', result.mal_id.toString());
        else {
          this.writingMovie.aired = result.aired;
          this.writingMovie.studios = result.studios;
        }
        this.writingMovie.title = result.title;
        this.writingMovie.memo = result.memo
        let element: HTMLElement = document.getElementById('writing-area');
        try {
          element.scrollIntoView();
        } catch(e) {
          alert('알 수 없는 에러가 발생하였습니다.\n' + e);
        }
      });
    }
  }

  allElementsLength(m: number): number {
    let count = 0;
    for (let i=0; i<this.movies[m].series.length; i++) {
      count += this.movies[m].series[i].sequences.length;
    }
    return count;
  }

  ngOnInit() {
  }

  clickMovie(m: number, series: number, sequence: number) {
    if ( this.movies[m].modifying ) return;
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

  clickMovieWithId(_id: string, series: number, sequence: number) {
    if ( this.movieMap.get(_id).modifying ) return;
    let opened = {series: series, sequence: sequence, linked: null};
    if ( this.movieMap.get(_id).opened ) {
      if ( this.movieMap.get(_id).opened.series != series || this.movieMap.get(_id).opened.sequence != sequence ) {
        opened.linked = this.movieMap.get(_id).opened.linked;
        this.movieMap.get(_id).opened = opened;
      } else this.movieMap.get(_id).opened = null;
      return;
    }
    this.movieMap.get(_id).opened = opened;
    this.setLinkedTvaWithId(_id, this.movieMap.get(_id).category_tva, this.movieMap.get(_id).series[series].key);
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

  private setLinkedTvaWithId(_id: string, tva_id: string, key: string) {
    if ( this.movieMap.get(_id).opened.linked ) return;
    this.tvaService.getTva(tva_id).subscribe(tva => {
      for (let i=0; i<tva.series.length; i++) {
        if ( tva.series[i].key == key ) {
          this.movieMap.get(_id).opened.linked = {
            title: tva.series[i].title,
            _id: tva._id,
            series: i
          };
          return;
        }
      }
    });
  }

  editCategory(m: number) {
    const data: SendingTextProtocol = {
      title: '카테고리명 수정',
      explain: '수정할 카테고리명을 입력해주세요.',
      placeholder: '카테고리명',
      text: this.movies[m].category
    }
    const dialogRef = this.dialog.open(TextFieldDialogComponent, {data: data});
    dialogRef.afterClosed().subscribe(() => {
      if ( !data.text || data.text == '' ) return;
      this.movies[m].category = data.text;
      this.movieService.modifyMovie(this.movies[m]).subscribe(result => {
        if ( !result._id ) alert('수정 실패');
      });
    });
  }

  private setStudio(studios: string[]) {
    this.modifying.studios = '';
    for (let studio of studios) this.modifying.studios += studio + '\n';
  }

  modifyMovie(m: number, series: number, sequence: number) {
    this.movies[m].opened = null;
    for (let tva of this.movies) tva.modifying = null;
    this.movies[m].modifying = cloneObject(this.movies[m].series[series].sequences[sequence]);
    this.modifying = {series: series, sequence: sequence, studios: undefined};
    this.setStudio(this.movies[m].modifying.studios);

    this.tvaService.getTvas().subscribe(tvas => {
      this.tvas = tvas;
      this.tvas.sort((a: Tva, b: Tva) => {
        return a.category.localeCompare(b.category);
      });
      for (let i=0; i<this.tvas.length; i++) {
        if ( this.movies[m].category_tva == this.tvas[i]._id ) {
          for (let j=0; j<this.tvas[i].series.length; j++) {
            if ( this.movies[m].series[series].key == this.tvas[i].series[j].key ) {
              this.linked = {
                idx: i,
                series: j
              };
              return;
            }
          }
        }
      }
    });
  }

  cancelModify(m: number) {
    this.movies[m].modifying = null;
    this.movies[m].opened = null;
    this.clickMovie(m, this.modifying.series, this.modifying.sequence);
  }

  cancelWrite() {
    this.cancelEditing();
  }

  private cancelEditing() {
    this.writing = false;
    this.tvas = null;
    this.linked = {
      idx: 0,
      series: 0
    };
  }

  onModifySubmit(m: number, series: number, sequence: number) {
    if ( !confirm('저장하시겠습니까?') ) return;

    // validating input values
    if ( !isOK(this.movies[m].modifying, ['memo']) ) return notOK();
    if ( !isOK(this.modifying) || !isOK(this.linked) ) return notOK();

    // change series with input title
    this.movies[m].series[series].sequences.splice(sequence, 1);
    let flag: boolean = false;
    outer: for (let i=0; i<this.movies[m].series.length; i++) {
      if ( this.movies[m].series[i].key == this.tvas[this.linked.idx].series[this.linked.series].key ) {
        flag = true;
        this.movies[m].modifying.studios = this.modifying.studios.trim().split('\n');
        this.movies[m].series[i].sequences.push(this.movies[m].modifying);
        this.movies[m].series[i].sequences.sort((a, b) => { return a.order - b.order; });
        series = i;
        for (let j=0; j<this.movies[m].series[i].sequences.length; j++) {
          if ( this.movies[m].series[i].sequences[j].order == this.movies[m].modifying.order ) {
            sequence = j;
            break outer;
          }
        }
        break;
      }
    }

    // create a new series with input title
    if ( !flag ) {
      this.movies[m].series.push({
        title: this.tvas[this.linked.idx].series[this.linked.series].title,
        key: this.tvas[this.linked.idx].series[this.linked.series].key,
        memo: '',
        sequences: [ this.movies[m].modifying ]
      });
      series = this.movies[m].series.length - 1;
      sequence = 0;
      this.movies[m].series.sort((a, b) => { return new Date(a.sequences[0].aired).getTime() - new Date(b.sequences[0].aired).getTime() });
    }

    // remove empty series (which has an empty sequence)
    for (let i=0; i<this.movies[m].series.length; i++) {
      if ( this.movies[m].series[i].sequences.length == 0 ) {
        this.movies[m].series.splice(i, 1);
        if ( series >= i ) series--;
        break;
      }
    }

    this.movieService.modifyMovie(this.movies[m]).subscribe(result => {
      if ( result._id ) {
        this.movies[m].modifying = null;
        this.clickMovie(m, series, sequence);
        this.flashMessage.showFlashMessage({
          messages: ['수정되었습니다.'],
          type: 'success',
          timeout: 2000
        });
        return false;
      } else {
        this.flashMessage.showFlashMessage({
          messages: ['오류가 발생하였습니다.'],
          type: 'danger',
          timeout: 3000
        });
        return false;
      }
    });
  }

  seriesSelect() {
    if ( !this.tvas[this.linked.idx].category_movie ) return;
    for (let movie of this.movies) {
      if ( this.tvas[this.linked.idx].category_movie == movie._id ) {
        for (let movieSeries of movie.series) {
          if ( this.tvas[this.linked.idx].series[this.linked.series].key == movieSeries.key ) {
            this.seriesMemo = movieSeries.memo;
            // this.writingMovie.order = movieSeries.sequences.length + 1;
            return;
          }
        }
      }
    }
    // this.writingMovie.order = 1;
  }

  private searchedToSequence(sequence: MovieSequence, malSearched: MalSearched) {
    if ( malSearched.title.kor ) sequence.title.kor = malSearched.title.kor;
    sequence.title.eng = malSearched.title.eng;
    sequence.title.jpn = malSearched.title.jpn;
    sequence.aired = malSearched.aired.start;
    sequence.studios = malSearched.studios;
    sequence.mal_id = malSearched.mal_id;
    sequence.img = malSearched.img;
    this.setStudio(sequence.studios);
  }

  searchMovie(option: string, text: string, m?: number) {
    if ( !option ) {
      alert('옵션을 선택해주세요.');
      return;
    }
    if ( !text || text == '' ) {
      alert('비어있습니다.');
      return;
    }

    let movie: MovieSequence = m ? this.movies[m].modifying : this.writingMovie;
    if ( option == 'mal_id' ) {
      let id = parseInt(text);
      if ( isNaN(id) ) {
        this.flashMessage.showFlashMessage({
          messages: ['숫자를 입력해야 합니다.'],
          type: 'danger',
          timeout: 3000
        });
        return;
      }
      this.loading = true;
      this.searchService.mal(id).subscribe(result => {
        this.loading = false;
        if ( result.mal_id ) this.searchedToSequence(movie, result);
        else {
          this.flashMessage.showFlashMessage({
            messages: ['존재하지 않는 ID이거나 오류가 발생했습니다.'],
            type: 'danger',
            timeout: 3000
          });
        }
      });
    } else {
      const data: SendingSearchedProtocol = searchedProtocolFactory(text, option);
      const dialogRef = this.dialog.open(SearchDialogComponent, {data: data});
      dialogRef.afterClosed().subscribe(() => {
        if ( data.malSearched ) {
          this.searchedToSequence(movie, data.malSearched);
        }
      });
    }
  }

  writeMovie() {
    this.seriesMemo = '';
    this.writing = true;
    this.writingMovie = {
      title: {kor: '', eng: '', jpn: '', rv: 'kor'},
      aired: '',
      order: 1,
      studios: [],
      memo: '',
      mal_id: 0,
      img: ''
    };
    this.modifying = {
      studios: '',
      series: 0,
      sequence: 0
    };

    this.tvaService.getTvas().subscribe(tvas => {
      this.tvas = tvas;
      this.tvas.sort((a: Tva, b: Tva) => {
        return a.category.localeCompare(b.category);
      });
    });
  }

  onWriteSubmit() {
    // validating input values
    if ( !isOK(this.writingMovie, ['memo']) ) return notOK();
    if ( !isOK(this.modifying) || !isOK(this.linked) ) return notOK();

    let category: number = -1;
    let series: number = -1;
    for (let i=0; i<this.movies.length; i++) {
      if ( this.movies[i].category == this.tvas[this.linked.idx].category ) {
        category = i;
        for (let j=0; j<this.movies[i].series.length; j++) {
          if ( this.movies[i].series[j].key == this.tvas[this.linked.idx].series[this.linked.series].key ) {
            series = j;
            break;
          }
        }
        break;
      }
    }

    let newMovie: Movie;
    this.writingMovie.studios = this.modifying.studios.trim().split('\n');
    if ( category != -1 ) {
      newMovie = this.movies[category];
      if ( series != -1 ) { // add to an existing series
        newMovie.series[series].sequences.push(this.writingMovie);
        newMovie.series[series].sequences.sort((a, b) => { return a.order - b.order });
      } else {  // add new series
        newMovie.series.push({
          title: this.tvas[this.linked.idx].series[this.linked.series].title,
          key: this.tvas[this.linked.idx].series[this.linked.series].key,
          memo: this.seriesMemo,
          sequences: [ this.writingMovie ]
        });
        newMovie.series.sort((a, b) => {
          return new Date(a.sequences[0].aired).getTime() - new Date(b.sequences[0].aired).getTime();
        });
      }
      this.movieService.modifyMovie(newMovie).subscribe(result => {
        if ( result._id ) {
          alert('추가되었습니다.');
          this.flashMessage.showFlashMessage({
            messages: ['추가되었습니다.'],
            type: 'success',
            timeout: 2000
          });
          this.cancelEditing();
          this.movieMap.set(result._id, result);
          this.clickMovieWithId(result._id, series, result.series[series].sequences.length-1);
          let el = document.getElementById(result._id);
          try { el.scrollIntoView() } catch(e) {}
          if ( this.incompletion_id ) {
            (this.from == 'data-from-watching' ? this.watchingService : this.planService).remove(this.incompletion_id).subscribe(err => {
              if ( err ) alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
              else this.incompletion_id = undefined;
            });
          }
        } else {
          alert('오류가 발생하였습니다.');
          this.flashMessage.showFlashMessage({
            messages: ['오류가 발생하였습니다.'],
            type: 'danger',
            timeout: 3000
          });
        }
        return;
      });
    } else {
      newMovie = {
        category: this.tvas[this.linked.idx].category,
        category_tva: this.tvas[this.linked.idx]._id,
        series: [{
          title: this.tvas[this.linked.idx].series[this.linked.series].title,
          key: this.tvas[this.linked.idx].series[this.linked.series].key,
          memo: this.seriesMemo,
          sequences: [ this.writingMovie ]
        }]
      };
      this.movieService.addMovie(newMovie).subscribe(result => {
        if ( result._id ) {
          alert('추가되었습니다.');
          this.flashMessage.showFlashMessage({
            messages: ['추가되었습니다.'],
            type: 'success',
            timeout: 2000
          });
          this.cancelEditing();
          this.movies.push(result);
          // this.movies.sort((a, b) => { return a.category.localeCompare(b.category) });
          this.align();
          this.movieMap.set(result._id, result);
          this.clickMovieWithId(result._id, 0, 0);
          setTimeout(() => {
            try { document.getElementById(result._id).scrollIntoView() }
            catch(e) {}
          }, 500);
          if ( this.incompletion_id ) {
            (this.from == 'data-from-watching' ? this.watchingService : this.planService).remove(this.incompletion_id).subscribe(err => {
              if ( err ) alert('원래의 목록에서 삭제하는 도중 오류가 발생하였습니다.');
              else this.incompletion_id = undefined;
            });
          }
        } else {
          alert('오류가 발생하였습니다.');
          this.flashMessage.showFlashMessage({
            messages: ['오류가 발생하였습니다.'],
            type: 'danger',
            timeout: 3000
          });
        }
        return;
      });
    }

  }

  removeMovie(m: number, series: number, sequence: number) {
    if ( !confirm('삭제하시겠습니까?') ) return;
    this.movieService.removeMovie(this.movies[m]._id, series, sequence).subscribe(err => {
      if ( err ) {
        this.flashMessage.showFlashMessage({
          messages: ['오류가 발생하였습니다.'],
          type: 'danger',
          timeout: 3000
        });
        return false;
      } else {
        this.movies.splice(m, 1);
      }
    });
  }

  openAll() {
    for (let i=0; i<this.movies.length; i++) {
      this.movies[i].opened = null;
      this.clickMovie(i, 0, 0);
    }
  }

  closeAll() {
    for (let movie of this.movies) {
      movie.opened = null;
    }
  }

  count(): number {
    if ( this.movies ) {
      let count = 0;
      for (let movie of this.movies) {
        for (let series of movie.series) {
          count += series.sequences.length;
        }
      }
      return count;
    }
    return 0;
  }

  findByStudio(studio: string) {
    this.dialog.open(StudioDialogComponent, {data: studio});
  }

}
