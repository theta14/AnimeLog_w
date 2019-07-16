import { Component, OnInit } from '@angular/core';
import { TvaService } from 'src/app/services/tva.service';
import { Tva } from 'src/app/models/tva';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { MatDialog } from '@angular/material';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { SendingSearchedProtocol, Aired } from 'src/app/models/searched';
import { cloneObject } from 'src/app/models/item';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {
  tvas: Tva[] = null;
  modifying: {
    seriesTitle: string,
    studios: string,
    series: number,
    sequence: number
  } = null;

  seriesControl: FormControl;
  seriesOptions: string[];
  seriesFilteredOptions: Observable<string[]>;

  constructor(
    private tvaService: TvaService,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog
  ) {
    this.tvaService.getTvas().subscribe(tvas => {
      this.tvas = tvas;
      this.tvas.sort((a: Tva, b: Tva) => {
        return a.category.localeCompare(b.category);
      });
      setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
    });
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      let idx = -1;
      for (let i=0; i<this.tvas.length; i++) {
        if ( this.tvas[i]._id == _id ) {
          idx = i;
          break;
        }
      }
      if ( idx == -1 ) return;
      this.clickTva(idx, +this.route.snapshot.paramMap.get('series'), +this.route.snapshot.paramMap.get('sequence'));
      let element: HTMLElement = document.getElementById('tva' + idx);
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
    for (let s of this.tvas[t].series) this.seriesOptions.push(s.title);
    this.seriesFilteredOptions = this.seriesControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this.seriesOptions.filter(option => option.toLowerCase().includes(value.toLowerCase()));
      })
    );
  }

  cancelModify(t: number) {
    this.tvas[t].modifying = null;
    this.tvas[t].opened = null;
    this.clickTva(t, this.modifying.series, this.modifying.sequence);
  }

  // private isOK(t: string | number): boolean {
  //   if ( t == null ) {
  //     this.flashMessage.showFlashMessage({
  //       messages: ['비어있는 필드가 있습니다.'],
  //       type: 'danger',
  //       timeout: 3000
  //     });
  //     return false;
  //   }
  //   if ( typeof t == 'string' ) if ( t == '' ) {
  //     this.flashMessage.showFlashMessage({
  //       messages: ['비어있는 필드가 있습니다.'],
  //       type: 'danger',
  //       timeout: 3000
  //     });
  //     return false;
  //   }
  //   return true;
  // }

  private isValid(s: string | number): boolean { return !(s == null || s === ''); }
  private notOK() { this.flashMessage.showFlashMessage({messages: ['비어있는 필드가 있습니다.'], type: 'danger', timeout: 3000}); }

  private isOK(obj: any): boolean {
    if ( typeof obj != 'object' ) {
      if ( !this.isValid(obj) ) return false;
    } else {
      for (let key in obj) {
        if ( typeof obj[key] != 'object' ) {
          if ( !this.isOK(obj[key]) ) return false;
        } else if ( Array.isArray(obj[key]) ) {
          for (let each of obj[key]) if ( !this.isOK(each) ) return false;
        } else {
          if ( this.isOK(obj[key]) ) return false;
        }
      }
    }
    return true;
  }

  onModifySubmit(t: number, series: number, sequence: number) {
    // if ( !this.isOK(this.tvas[t].modifying.title.kor) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.title.eng) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.title.jpn) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.premiered.year) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.premiered.quarter) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.aired.start) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.aired.end) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.season) ) return;
    // if ( !this.isOK(this.tvas[t].modifying.episodes) ) return;
    // if ( !this.isOK(this.modifying.studios) ) return;

    // validating input values
    if ( !this.isOK(this.tvas[t].modifying) ) return this.notOK();
    this.modifying.seriesTitle = this.seriesControl.value;
    if ( !this.isOK(this.modifying) ) return this.notOK();

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
    }

    // remove empty series (which has an empty sequence)
    for (let i=0; i<this.tvas[t].series.length; i++) {
      if ( this.tvas[t].series[i].sequences.length == 0 ) {
        this.tvas[t].series[i].sequences.splice(i, 1);
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

  searchTva(t: number, option: string, text: string) {
    if ( !option ) {
      alert('옵션을 선택해주세요.');
      return;
    }
    if ( !text || text == '' ) {
      alert('비어있습니다.');
      return;
    }
    const data: SendingSearchedProtocol = {
      search: {type: 'tva', text: text, option: option},
      malSearched: null
    };
    const dialogRef = this.dialog.open(SearchDialogComponent, {data: data});
    dialogRef.afterClosed().subscribe(() => {
      if ( data.malSearched ) {
        this.tvas[t].modifying.title.eng = data.malSearched.title.eng;
        this.tvas[t].modifying.title.jpn = data.malSearched.title.jpn;
        this.tvas[t].modifying.premiered.year = data.malSearched.premiered.year;
        this.tvas[t].modifying.premiered.quarter = data.malSearched.premiered.quarter;
        this.tvas[t].modifying.aired = <Aired> data.malSearched.aired;
        this.tvas[t].modifying.episodes = data.malSearched.episodes;
        this.tvas[t].modifying.studios = data.malSearched.studios;
        this.tvas[t].modifying.mal_id = data.malSearched.mal_id;
        this.tvas[t].modifying.img = data.malSearched.img;
        this.setStudio(this.tvas[t].modifying.studios);
      }
    });
  }

  removeTva(t: number, series: number, sequence: number) {
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

}
