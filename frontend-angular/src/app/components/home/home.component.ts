import { Component, OnInit } from '@angular/core';
import { TvaService } from 'src/app/services/tva.service';
import { MovieService } from 'src/app/services/movie.service';
import { WatchingService } from 'src/app/services/watching.service';
import { PlanService } from 'src/app/services/plan.service';
import { Completion, Sequence } from 'src/app/models/completion';
import { Incompletion } from 'src/app/models/incompletion';
import { PageEvent, MatDialog } from '@angular/material';
import { Carousel, Items, SearchedItems, PageEvents, SearchedSequence } from './home.component.model';
import { TitleService } from 'src/app/services/title.service';
import { StudioDialogComponent } from '../dialogs/studio-dialog/studio-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel: Carousel[] = [];
  backgrounds: number[] = [];

  private readonly titleTypes = [ 'eng', 'kor', 'jpn' ];
  allItems: Items = new Items();
  searchedItems: SearchedItems = new SearchedItems();
  searchedText: string = undefined;

  pageEvents: PageEvents;
  readonly pageSizeOptions = [ 5, 10, 25, 100 ];
  readonly pageSize = 10;

  constructor(
    private tvaService: TvaService,
    private movieService: MovieService,
    private watchingService: WatchingService,
    private planService: PlanService,
    private titleService: TitleService,
    private dialog: MatDialog
  ) {
    this.titleService.setDefaultTitle();
    this.tvaService.getTvas().subscribe(tvas => {
      this.allItems.tvas = tvas;
      let tva = tvas[ this.getRandomNumber(tvas.length) ];
      let i: number = this.getRandomNumber(tva.series.length);
      let j: number = this.getRandomNumber(tva.series[i].sequences.length);
      let sequence = tva.series[i].sequences[j];
      this.carousel.push({
        type: '[ TVA ]',
        title: sequence.title[sequence.title.rv],
        content: `${sequence.premiered.year}년 ${sequence.premiered.quarter}분기 방영`,
        link: `/tva/${tva._id}/${i}/${j}`
      });
    });
    this.movieService.getMovies().subscribe(movies => {
      this.allItems.movies = movies;
      let movie = movies[ this.getRandomNumber(movies.length) ];
      let i: number = this.getRandomNumber(movie.series.length);
      let j: number = this.getRandomNumber(movie.series[i].sequences.length);
      let sequence = movie.series[i].sequences[j];
      let date = new Date(sequence.aired);
      this.carousel.push({
        type: '[ 극장판 ]',
        title: sequence.title[sequence.title.rv],
        content: `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 개봉`,
        link: `/movie/${movie._id}/${i}/${j}`
      });
    });
    this.watchingService.getWatchings().subscribe(watchings => {
      this.allItems.watchings = watchings;
      let watching = watchings[ this.getRandomNumber(watchings.length) ];
      this.carousel.push({
        type: `[ ${watching.type == 'tva' ? 'TVA' : '극장판'} - 시청 중 ] `,
        title: watching.title[watching.title.rv],
        content: `${watching.premiered.year}년 ${watching.premiered.quarter}분기 방영`,
        link: `/watching/${watching._id}`
      });
    });
    this.planService.getPlans().subscribe(plans => {
      this.allItems.plans = plans;
      let plan = plans[ this.getRandomNumber(plans.length) ];
      let date = new Date(plan.aired);
      this.carousel.push({
        type: `[ ${plan.type == 'tva' ? 'TVA' : '극장판'} - 시청 예정 ] `,
        title: plan.title[plan.title.rv],
        content: (plan.aired != null && plan.aired != '') ? `${date.getFullYear()}년 ${Math.floor((date.getMonth() + 4) / 3)}분기 방영` : '기타 정보 없음',
        link: `/plan/${plan._id}`
      });
    });

    let pageEvent = new PageEvent();
    pageEvent.pageIndex = 0;
    pageEvent.pageSize = 10;
    this.pageEvents = {
      tva: pageEvent,
      movie: pageEvent,
      watching: pageEvent,
      plan: pageEvent
    };
  }

  private getRandomNumber(len: number): number {
    return Math.floor(Math.random() * len);
  }

  private removeSpace(text: string): string {
    return text.replace(/\s/gi, '');
  }

  private matchWithNoSpace(big: string, small: string): boolean {
    return this.removeSpace(big.toLowerCase()).includes(small);
  }

  ngOnInit() {
    this.backgrounds = [];
    const bgCounts = 10;
    for (let i=0; i<4; i++) {
      let idx: number = this.getRandomNumber(bgCounts);
      let flag: boolean = i != 0;
      while ( flag ) {
        for (let j=0; j<this.backgrounds.length; j++) {
          if ( idx == this.backgrounds[j] ) {
            flag = true;
            idx = this.getRandomNumber(bgCounts);
            break;
          } else {
            flag = false;
          }
        }
      }
      this.backgrounds[i] = idx;
    }
  }

  private searchCompletion(text: string, what: string) {
    const arr: Completion[] = this.allItems[what];
    arr.some(c => {
      if ( this.matchWithNoSpace(c.category, text) ) {
        for (let [i, series] of c.series.entries()) {
          for (let [j, sequence] of series.sequences.entries()) {
            let searchedSequence: SearchedSequence = <SearchedSequence> sequence;
            searchedSequence._id = c._id;
            searchedSequence.series = i;
            searchedSequence.sequence = j;
            searchedSequence.seriesTitle = series.title;
            (<Sequence[]> this.searchedItems[what]).push(searchedSequence);
          }
        }
        return false;
      }
      for (let [i, series] of c.series.entries()) {
        if ( this.matchWithNoSpace(series.title, text) ) {
          for (let [j, sequence] of series.sequences.entries()) {
            let searchedSequence: SearchedSequence = <SearchedSequence> sequence;
            searchedSequence._id = c._id;
            searchedSequence.series = i;
            searchedSequence.sequence = j;
            searchedSequence.seriesTitle = series.title;
            (<SearchedSequence[]> this.searchedItems[what]).push(searchedSequence);
          }
          return false;
        } else {
          for (let [j, sequence] of series.sequences.entries()) {
            for (let titleType of this.titleTypes) {
              if ( this.matchWithNoSpace(sequence.title[titleType], text) ) {
                let searchedSequence: SearchedSequence = <SearchedSequence> sequence;
                searchedSequence._id = c._id;
                searchedSequence.series = i;
                searchedSequence.sequence = j;
                searchedSequence.seriesTitle = series.title;
                (<SearchedSequence[]> this.searchedItems[what]).push(searchedSequence);
                return false;
              }
            }
            for (let studio of sequence.studios) {
              if ( this.matchWithNoSpace(studio, text) ) {
                let searchedSequence: SearchedSequence = <SearchedSequence> sequence;
                searchedSequence._id = c._id;
                searchedSequence.series = i;
                searchedSequence.sequence = j;
                searchedSequence.seriesTitle = series.title;
                (<SearchedSequence[]> this.searchedItems[what]).push(searchedSequence);
                return false;
              }
            }
          }
        }
      }
    });
  }

  private searchIncompletion(text: string, what: string) {
    const arr: Incompletion[] = this.allItems[what];
    arr.some(ic => {
      for (let titleType of this.titleTypes) {
        if ( this.matchWithNoSpace(ic.title[titleType], text) ) {
          (<Incompletion[]> this.searchedItems[what]).push(ic);
          return false;
        }
      }
      for (let studio of ic.studios) {
        if ( this.matchWithNoSpace(studio, text) ) {
          (<Incompletion[]> this.searchedItems[what]).push(ic);
          return false;
        }
      }
    });
  }

  search(text: string) {
    text = this.removeSpace(text).toLowerCase();
    this.searchedItems = new SearchedItems();
    this.searchedText = text;
    if ( text == '' ) return;
    this.searchCompletion(text, 'tvas');
    this.searchCompletion(text, 'movies');
    this.searchIncompletion(text, 'watchings');
    this.searchIncompletion(text, 'plans');
  }

  allElementsLength(completion: Completion): number {
    let count = 0;
    for (let i=0; i<completion.series.length; i++) {
      count += completion.series[i].sequences.length;
    }
    return count;
  }

  getQuarterFromAiredDate(aired: string): string {
    if ( !aired || aired == '' ) return '-';
    let date = new Date(aired);
    let year = date.getFullYear().toString().substring(2);
    let qtr = Math.floor((date.getMonth() + 4) / 3);
    return `'${year} - ${qtr}`;
  }

  findByStudio(studio: string) {
    this.dialog.open(StudioDialogComponent, {data: studio});
  }

}
