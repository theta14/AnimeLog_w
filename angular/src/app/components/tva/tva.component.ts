import { Component, OnInit } from '@angular/core';
import { TvaService } from 'src/app/services/tva.service';
import { Tva, TvaSequence } from 'src/app/models/tva';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { MatDialog, MatAutocompleteSelectedEvent } from '@angular/material';
import { SearchDialogComponent } from '../dialogs/search-dialog/search-dialog.component';
import { SendingSearchedProtocol, MalSearched, searchedProtocolFactory } from 'src/app/models/searched';
import { cloneObject, isOK, notOK } from 'src/app/models/item';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { WatchingService } from 'src/app/services/watching.service';
import { PlanService } from 'src/app/services/plan.service';
import { HeaderAlign } from 'src/app/models/headerAlign';
import { SendingTextProtocol, TextFieldDialogComponent } from '../dialogs/text-field-dialog/text-field-dialog.component';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent extends HeaderAlign<Tva> implements OnInit {
  tvas: Tva[] = null;
  tvaMap: Map<string, Tva>;
  modifying: {
    seriesTitle: string,
    studios: string,
    series: number,
    sequence: number
  } = null;
  loading: boolean = false;

  seriesControl: FormControl;
  seriesOptions: string[];
  seriesFilteredOptions: Observable<string[]>;

  writeFormGroup: FormGroup;

  categoryControl: FormControl;
  categoryOptions: string[];
  categoryFilteredOptions: Observable<string[]>;

  writing: boolean = false;
  writingTva: TvaSequence;
  seriesMemo: string;

  from: string = undefined;
  incompletion_id: string = undefined;

  constructor(
    private tvaService: TvaService,
    private movieService: MovieService,
    private watchingService: WatchingService,
    private planService: PlanService,
    private searchService: SearchService,
    private titleService: TitleService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog
  ) {
    super([2], [6]);
    this.titleService.setTitle('TVA');
    this.tvaService.getTvas().subscribe(tvas => {
      this.tvas = tvas;
      super.setItems([this.tvas]);
      this.tvaMap = new Map<string, Tva>();
      tvas.map(v => this.tvaMap.set(v._id, v));
      this.align();
      setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
    });
  }

  protected getAlignment(standard: number) {
    switch(standard) {
      case 0: return (a: Tva, b: Tva) => { return a.category.localeCompare(b.category) * this.alignments[0][standard] }
      case 1: return (a: Tva, b: Tva) => { return a.series[0].title.localeCompare(b.series[0].title) * this.alignments[0][standard] }
      case 2: return (a: Tva, b: Tva) => { return a.series[0].sequences[0].title[a.series[0].sequences[0].title.rv].localeCompare(b.series[0].sequences[0].title[a.series[0].sequences[0].title.rv]) * this.alignments[0][standard] }
      case 3: return (a: Tva, b: Tva) => { return a.series[0].sequences[0].studios[0].localeCompare(b.series[0].sequences[0].studios[0]) * this.alignments[0][standard] }
      case 4: return (a: Tva, b: Tva) => { return (a.series[0].sequences[0].episodes - b.series[0].sequences[0].episodes) * this.alignments[0][standard] }
      case 5: return (a: Tva, b: Tva) => { return (new Date(a.series[0].sequences[0].aired.start).getTime() - new Date(b.series[0].sequences[0].aired.start).getTime()) * this.alignments[0][standard] }
      default: return;
    }
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      this.clickTvaWithId(_id, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
      let element: HTMLElement = document.getElementById(_id);
      try {
        element.scrollIntoView();
      } catch(e) {
        alert('알 수 없는 에러가 발생하였습니다.\n' + e);
      }
    } else if ( this.route.snapshot.paramMap.get('from') ) {
      this.writeTva();
      this.from = this.route.snapshot.paramMap.get('from');
      this.incompletion_id = this.route.snapshot.paramMap.get('incompletion_id');
      (this.from == 'data-from-watching' ? this.watchingService : this.planService).get(this.incompletion_id).subscribe(result => {
        if ( !result._id ) {
          alert('알 수 없는 에러가 발생하였습니다.\n' + result);
          return;
        }
        if ( result.mal_id ) this.searchTva('mal_id', result.mal_id.toString());
        else {
          this.writingTva.aired.start = result.aired;
          this.writingTva.studios = result.studios;
        }
        this.writingTva.title = result.title;
        this.writingTva.memo = result.memo;
        let element: HTMLElement = document.getElementById('writing-area');
        try {
          element.scrollIntoView();
        } catch(e) {
          alert('알 수 없는 에러가 발생하였습니다.\n' + e);
        }
      });
    }
  }

  allElementsLength(t: number): number {
    let count = 0;
    for (let i=0; i<this.tvas[t].series.length; i++) {
      count += this.tvas[t].series[i].sequences.length;
    }
    return count;
  }

  ngOnInit() {
  }

  clickTva(t: number, series: number, sequence: number) {
    if ( this.tvas[t].modifying ) return;
    let opened = {series: series, sequence: sequence, linked: null};
    if ( this.tvas[t].opened ) {
      if ( this.tvas[t].opened.series != series || this.tvas[t].opened.sequence != sequence ) {
        opened.linked = this.tvas[t].opened.linked;
        this.tvas[t].opened = opened;
      } else this.tvas[t].opened = null;
      return;
    }
    this.tvas[t].opened = opened;
    this.setLinkedTva(t, this.tvas[t].category_movie, this.tvas[t].series[series].key);
  }

  clickTvaWithId(_id: string, series: number, sequence: number) {
    if ( this.tvaMap.get(_id).modifying ) return;
    let opened = {series: series, sequence: sequence, linked: null};
    if ( this.tvaMap.get(_id).opened ) {
      if ( this.tvaMap.get(_id).opened.series != series || this.tvaMap.get(_id).opened.sequence != sequence ) {
        opened.linked = this.tvaMap.get(_id).opened.linked;
        this.tvaMap.get(_id).opened = opened;
      } else this.tvaMap.get(_id).opened = null;
      return;
    }
    this.tvaMap.get(_id).opened = opened;
    this.setLinkedTvaWithId(_id, this.tvaMap.get(_id).category_movie, this.tvaMap.get(_id).series[series].key);
  }

  private setLinkedTva(t: number, movie_id: string, key: string) {
    if ( !this.tvas[t].category_movie ) return;
    if ( this.tvas[t].opened.linked ) return;
    this.movieService.getMovie(movie_id).subscribe(movie => {
      for (let i=0; i<movie.series.length; i++) {
        if ( movie.series[i].key == key ) {
          this.tvas[t].opened.linked = {
            title: movie.series[i].title,
            _id: movie._id,
            series: i
          };
          return;
        }
      }
      this.tvas[t].opened.linked = null;
    });
  }

  private setLinkedTvaWithId(_id: string, movie_id: string, key: string) {
    if ( !this.tvaMap.get(_id).category_movie ) return;
    if ( this.tvaMap.get(_id).opened.linked ) return;
    this.movieService.getMovie(movie_id).subscribe(movie => {
      for (let i=0; i<movie.series.length; i++) {
        if ( movie.series[i].key == key ) {
          this.tvaMap.get(_id).opened.linked = {
            title: movie.series[i].title,
            _id: movie._id,
            series: i
          };
          return;
        }
      }
      this.tvaMap.get(_id).opened.linked = null;
    });
  }

  editCategory(t: number) {
    const data: SendingTextProtocol = {
      title: '카테고리명 수정',
      explan: '수정할 카테고리명을 입력해주세요.',
      placeholder: '카테고리명',
      text: this.tvas[t].category
    }
    const dialogRef = this.dialog.open(TextFieldDialogComponent, {data: data});
    dialogRef.afterClosed().subscribe(() => {
      if ( !data.text || data.text == '' ) return;
      this.tvas[t].category = data.text;
      this.tvaService.modifyTva(this.tvas[t]).subscribe(result => {
        if ( !result._id ) alert('수정 실패');
      });
    });
  }

  private setStudio(studios: string[]) {
    this.modifying.studios = '';
    for (let studio of studios) this.modifying.studios += studio + '\n';
  }

  modifyTva(t: number, series: number, sequence: number) {
    this.tvas[t].opened = null;
    for (let tva of this.tvas) tva.modifying = null;
    this.tvas[t].modifying = cloneObject(this.tvas[t].series[series].sequences[sequence]);
    this.modifying = {series: series, sequence: sequence, studios: undefined, seriesTitle: this.tvas[t].series[series].title};
    this.setStudio(this.tvas[t].modifying.studios);

    this.seriesOptions = [];
    this.seriesControl = new FormControl();
    for (let s of this.tvas[t].series) this.seriesOptions.push(s.title);
    this.seriesFilteredOptions = this.seriesControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this.seriesOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
      })
    );
    this.seriesControl.setValue(this.tvas[t].series[series].title);
  }

  cancelModify(t: number) {
    this.tvas[t].modifying = null;
    this.tvas[t].opened = null;
    this.clickTva(t, this.modifying.series, this.modifying.sequence);
  }

  cancelWrite() {
    this.writing = false;
  }

  onModifySubmit(t: number, series: number, sequence: number) {
    if ( !confirm('저장하시겠습니까?') ) return;

    // validating input values
    if ( !isOK(this.tvas[t].modifying, ['memo']) ) return notOK();
    this.modifying.seriesTitle = this.seriesControl.value;
    if ( !isOK(this.modifying) ) return notOK();

    // change series with input title
    this.tvas[t].series[series].sequences.splice(sequence, 1);
    let flag: boolean = false;
    for (let i=0; i<this.tvas[t].series.length; i++) {
      if ( this.tvas[t].series[i].title == this.modifying.seriesTitle ) {
        flag = true;
        this.tvas[t].modifying.studios = this.modifying.studios.trim().split('\n');
        this.tvas[t].series[i].sequences.push(this.tvas[t].modifying);
        this.tvas[t].series[i].sequences.sort((a, b) => { return a.season - b.season; });
        series = i;
        for (let j=0; j<this.tvas[t].series[i].sequences.length; j++) {
          if ( this.tvas[t].series[i].sequences[j].season == this.tvas[t].modifying.season ) {
            sequence = j;
            break;
          }
        }
        break;
      }
    }

    // create a new series with input title
    if ( !flag ) {
      this.tvas[t].series.push({
        title: this.modifying.seriesTitle,
        key: new Date().getTime().toString(),
        memo: '',
        sequences: [ this.tvas[t].modifying ]
      });
      series = this.tvas[t].series.length - 1;
      sequence = 0;
      this.tvas[t].series.sort((a, b) => { return new Date(a.sequences[0].aired.start).getTime() - new Date(b.sequences[0].aired.start).getTime() });
    }

    // remove empty series (which has an empty sequence)
    for (let i=0; i<this.tvas[t].series.length; i++) {
      if ( this.tvas[t].series[i].sequences.length == 0 ) {
        this.tvas[t].series.splice(i, 1);
        if ( series >= i ) series--;
        break;
      }
    }

    this.tvaService.modifyTva(this.tvas[t]).subscribe(result => {
      if ( result._id ) {
        this.tvas[t].modifying = null;
        this.clickTva(t, series, sequence);
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

  private searchedToSequence(sequence: TvaSequence, malSearched: MalSearched) {
    if ( malSearched.title.kor ) sequence.title.kor = malSearched.title.kor;
    sequence.title.eng = malSearched.title.eng;
    sequence.title.jpn = malSearched.title.jpn;
    sequence.premiered.year = malSearched.premiered.year;
    sequence.premiered.quarter = malSearched.premiered.quarter;
    sequence.aired = malSearched.aired;
    sequence.episodes = malSearched.episodes;
    sequence.studios = malSearched.studios;
    sequence.mal_id = malSearched.mal_id;
    sequence.img = malSearched.img;
    this.setStudio(sequence.studios);
  }

  searchTva(option: string, text: string, t?: number) {
    if ( !option ) {
      alert('옵션을 선택해주세요.');
      return;
    }
    if ( !text || text == '' ) {
      alert('비어있습니다.');
      return;
    }

    let tva: TvaSequence = t ? this.tvas[t].modifying : this.writingTva;
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
        if ( result.mal_id ) this.searchedToSequence(tva, result);
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
          this.searchedToSequence(tva, data.malSearched);
        }
      });
    }
  }

  writeTva() {
    this.categoryOptions = [];
    this.seriesOptions = [];
    for (let tva of this.tvas) {
      this.categoryOptions.push(tva.category);
      tva.modifying = null;
    }
    this.categoryControl = new FormControl();
    this.categoryFilteredOptions = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this.categoryOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
      })
    );
    this.writeFormGroup = new FormGroup({
      writeSeriesControl: new FormControl()
    });

    let date = new Date();
    let year = date.getFullYear();
    let qtr = Math.floor((date.getMonth() + 4) / 3);
    this.seriesMemo = '';
    this.writing = true;
    this.writingTva = {
      title: {kor: '', eng: '', jpn: '', rv: 'kor'},
      premiered: {year: year, quarter: qtr},
      aired: {start: '', end: ''},
      season: 1,
      episodes: 0,
      studios: [],
      memo: '',
      mal_id: 0,
      img: ''
    };
    this.modifying = {
      seriesTitle: '',
      studios: '',
      series: 0,
      sequence: 0
    };
  }

  categoryInput(event: MatAutocompleteSelectedEvent) {
    for (let tva of this.tvas) {
      if ( event.option.value == tva.category ) {
        this.seriesOptions = [];
        for (let series of tva.series) this.seriesOptions.push(series.title);
        this.seriesFilteredOptions = this.writeFormGroup.get('writeSeriesControl').valueChanges.pipe(
          startWith(''),
          map(value => {
            return this.seriesOptions.filter(option => option.toLowerCase()
              .includes(value.toLowerCase()));
          })
        );
        return;
      }
    }
  }

  seriesInput(event: MatAutocompleteSelectedEvent) {
    for (let tva of this.tvas) {
      if ( event.option.value == tva.category ) {
        for (let series of tva.series) {
          if ( this.writeFormGroup.get('writeSeriesControl').value == series.title ) {
            this.seriesMemo = series.memo;
            this.writingTva.season = series.sequences.length + 1;
            return;
          }
        }
      }
    }
  }

  onWriteSubmit() {
    // validating input values
    if ( !isOK(this.writingTva, ['memo']) ) return notOK();
    this.modifying.seriesTitle = this.writeFormGroup.get('writeSeriesControl').value;
    if ( !isOK(this.modifying) || !isOK(this.categoryControl.value) ) return notOK();

    let category: number = -1;
    let series: number = -1;
    for (let i=0; i<this.tvas.length; i++) {
      if ( this.tvas[i].category == this.categoryControl.value ) {
        category = i;
        for (let j=0; j<this.tvas[i].series.length; j++) {
          if ( this.tvas[i].series[j].title == this.writeFormGroup.get('writeSeriesControl').value ) {
            series = j;
            break;
          }
        }
        break;
      }
    }

    let newTva: Tva;
    this.writingTva.studios = this.modifying.studios.trim().split('\n');
    if ( category != -1 ) {
      newTva = this.tvas[category];
      if ( series != -1 ) { // add to an existing series
        newTva.series[series].sequences.push(this.writingTva);
        newTva.series[series].sequences.sort((a, b) => { return a.season - b.season });
      } else {  // add new series
        newTva.series.push({
          title: <string> this.writeFormGroup.get('writeSeriesControl').value,
          key: new Date().getTime().toString(),
          memo: this.seriesMemo,
          sequences: [ this.writingTva ]
        });
        newTva.series.sort((a, b) => {
          return new Date(a.sequences[0].aired.start).getTime() - new Date(b.sequences[0].aired.start).getTime();
        });
      }
      this.tvaService.modifyTva(newTva).subscribe(result => {
        if ( result._id ) {
          alert('추가되었습니다.');
          this.flashMessage.showFlashMessage({
            messages: ['추가되었습니다.'],
            type: 'success',
            timeout: 2000
          });
          this.tvaMap.set(result._id, result);
          this.clickTvaWithId(result._id, series, result.series[series].sequences.length-1);
          setTimeout(() => {
            try {
              let el = document.getElementById(result._id);
              el.scrollIntoView();
            } catch(e) {}
          }, 500);
          this.writing = false;
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
      newTva = {
        category: <string> this.categoryControl.value,
        category_movie: null,
        series: [{
          title: <string> this.writeFormGroup.get('writeSeriesControl').value,
          key: new Date().getTime().toString(),
          memo: this.seriesMemo,
          sequences: [ this.writingTva ]
        }]
      };
      this.tvaService.addTva(newTva).subscribe(result => {
        if ( result._id ) {
          alert('추가되었습니다.');
          this.flashMessage.showFlashMessage({
            messages: ['추가되었습니다.'],
            type: 'success',
            timeout: 2000
          });
          this.writing = false;
          this.tvas.push(result);
          this.align();
          this.tvaMap.set(result._id, result);
          this.clickTvaWithId(result._id, 0, 0);
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

  removeTva(t: number, series: number, sequence: number) {
    if ( !confirm('삭제하시겠습니까?') ) return;
    this.tvaService.removeTva(this.tvas[t]._id, series, sequence).subscribe(err => {
      if ( err ) {
        this.flashMessage.showFlashMessage({
          messages: ['오류가 발생하였습니다.'],
          type: 'danger',
          timeout: 3000
        });
        return false;
      } else {
        this.tvas.splice(t, 1);
      }
    });
  }

  openAll() {
    for (let i=0; i<this.tvas.length; i++) {
      this.tvas[i].opened = null;
      this.clickTva(i, 0, 0);
    }
  }

  closeAll() {
    for (let tva of this.tvas) {
      tva.opened = null;
    }
  }

  count(): number {
    if ( this.tvas ) {
      let count = 0;
      for (let movie of this.tvas) {
        for (let series of movie.series) {
          count += series.sequences.length;
        }
      }
      return count;
    }
    return 0;
  }

}
