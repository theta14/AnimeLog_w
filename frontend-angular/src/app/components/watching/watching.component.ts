import { Component, OnInit } from '@angular/core';
import { Watching } from 'src/app/models/watching';
import { WatchingService } from 'src/app/services/watching.service';
import { ActivatedRoute } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { SendingSearchedProtocol, searchedProtocolFactory, MalSearched, Broadcast } from 'src/app/models/searched';
import { SearchDialogComponent } from '../dialogs/search-dialog/search-dialog.component';
import { MatDialog } from '@angular/material';
import { SearchService } from 'src/app/services/search.service';
import { isOK, notOK, cloneObject } from 'src/app/models/item';
import { SendingOhliProtocol } from 'src/app/models/ohli';
import { OhliDialogComponent } from '../dialogs/ohli-dialog/ohli-dialog.component';
import { PlanService } from 'src/app/services/plan.service';
import { HeaderAlign } from 'src/app/models/headerAlign';
import { TitleService } from 'src/app/services/title.service';
import { StudioDialogComponent } from '../dialogs/studio-dialog/studio-dialog.component';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css']
})
export class WatchingComponent extends HeaderAlign<Watching> implements OnInit {
  watchingMap: Map<string, Watching>;
  airings: Watching[] = null;
  ends: Watching[] = null;

  loading: boolean = false;
  writing: Watching = null;
  studios: string = null;

  plan_id: string = null;

  private readonly days: string[] = [
    '일', '월', '화', '수', '목', '금', '토'
  ];

  constructor(
    private watchingService: WatchingService,
    private planService: PlanService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog,
    private searchService: SearchService,
    private titleService: TitleService
  ) {
    super([1, 1], [5, 4]);
    this.titleService.setTitle('시청 중');
    this.watchingService.getWatchings().subscribe(watchings => {
      this.watchingMap = new Map<string, Watching>();
      this.airings = [];
      this.ends = [];
      for (let watching of watchings) {
        if ( watching.ohli_id ) this.airings.push(watching);
        else this.ends.push(watching);
        this.watchingMap.set(watching._id, watching);
      }
      this.setItems([this.airings, this.ends]);
      this.align(0);
      this.align(1);
      setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
    });
  }

  protected getAlignment(standard: number, num?: number) {
    switch(standard) {
      case 0: return (a: Watching, b: Watching) => { return a.type.localeCompare(b.type) * this.alignments[num][standard] }
      case 1: return (a: Watching, b: Watching) => { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) * this.alignments[num][standard] }
      case 2: return (a: Watching, b: Watching) => { return a.studios[0].localeCompare(b.studios[0]) * this.alignments[num][standard] }
      case 3: return (a: Watching, b: Watching) => { return (new Date(a.aired ? a.aired : null).getTime() - new Date(b.aired ? b.aired : null).getTime()) * this.alignments[num][standard] }
      case 4: return (a: Watching, b: Watching) => { return (new Date(a.aired).getDay() - new Date(b.aired).getDay()) * this.alignments[num][standard] }
      default: return null;
    }
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      this.click(_id);
      let element: HTMLElement = document.getElementById(_id);
      try {
        element.scrollIntoView();
      } catch(e) {
        alert('알 수 없는 에러가 발생하였습니다.\n' + e);
      }
    } else if ( this.route.snapshot.paramMap.get('plan_id') ) {
      this.plan_id = this.route.snapshot.paramMap.get('plan_id');
      this.write();
      this.planService.getPlan(this.plan_id).subscribe(plan => {
        this.writing.title = plan.title;
        this.writing.type = plan.type;
        this.writing.memo = plan.memo;
        if ( plan.aired ) this.writing.aired = plan.aired;
        this.studios = plan.studios.join('\n');
        if ( plan.mal_id ) this.search('mal_id', plan.mal_id.toString(), this.writing);
        try {
          let el = document.getElementById('writing-area');
          el.scrollIntoView();
        } catch(e) { alert('에러가 발생하였습니다.\n' + e) }
      });
    }
  }

  click(_id: string) {
    let watching: Watching = this.watchingMap.get(_id);
    if ( watching.modifying ) return;
    if ( watching.opened ) watching.opened = false;
    else {
      watching.opened = true;
      if ( watching.ohli_id ) {
        this.watchingService.getVideos(watching.title.eng).subscribe(videos => watching.videos = videos);
        this.watchingService.getOhys(watching.title.eng).subscribe(ohys => watching.ohys = ohys);
        this.watchingService.getSubtitles(watching.ohli_id).subscribe(subtitles => watching.subtitles = subtitles);
      }
    }
  }

  ngOnInit() {
  }

  private searchedToItem(watching: Watching, malSearched: MalSearched) {
    if ( malSearched.title.kor ) watching.title.kor = malSearched.title.kor;
    watching.title.eng = malSearched.title.eng;
    watching.title.jpn = malSearched.title.jpn;
    watching.aired = malSearched.aired.start;
    watching.premiered = malSearched.premiered;
    watching.broadcast = malSearched.broadcast;
    watching.mal_id = malSearched.mal_id;
    watching.img = malSearched.img;
    watching.type = malSearched.type;
    this.studios = malSearched.studios.join('\n');
  }

  search(option: string, text: string, item: Watching) {
    if ( !option ) {
      alert('옵션을 선택해주세요.');
      return;
    }
    if ( !text || text == '' ) {
      alert('비어있습니다.');
      return;
    }

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
        if ( result.mal_id ) this.searchedToItem(item, result);
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
          this.searchedToItem(item, data.malSearched);
        }
      });
    }
  }

  closeEdit(_id?: string) {
    if ( _id ) this.watchingMap.get(_id).modifying = null;
    this.writing = null;
    this.studios = '';
  }

  private closeAllEdit() {
    for (let arr of [ this.airings, this.ends ]) {
      for (let item of arr) {
        if ( item.modifying ) {
          this.closeEdit(item._id);
          return;
        }
      }
    }
    this.closeEdit();
  }

  findOhliId(watching: Watching) {
    if ( !watching.title.kor || watching.title.kor == '' ) {
      alert('한글 제목이 비어있습니다.');
      return;
    }
    const data: SendingOhliProtocol = {title: watching.title.kor, ohli_id: null};
    const dialogRef = this.dialog.open(OhliDialogComponent, {data: data});
    dialogRef.afterClosed().subscribe(() => watching.ohli_id = data.ohli_id);
  }

  removeOhliId(watching: Watching) {
    watching.ohli_id = null;
  }

  modify(_id: string) {
    this.closeAllEdit();
    this.watchingMap.get(_id).opened = false;
    this.watchingMap.get(_id).modifying = cloneObject(this.watchingMap.get(_id), ['videos', 'subtitles']);
    this.studios = this.watchingMap.get(_id).studios.join('\n');
  }

  onModifySubmit(_id: string, i: number, isAiring: boolean) {
    if ( !confirm('저장하시겠습니까?') ) return;
    if ( !isOK(this.watchingMap.get(_id).modifying, ['memo']) || !isOK(this.studios) ) return notOK(['빈 필드가 있습니다.']);
    let watching: Watching = this.watchingMap.get(_id).modifying;
    watching.studios = this.studios.trim().split('\n');
    this.watchingService.modifyWatching(watching).subscribe(result => {
      if ( result._id ) {
        this.watchingMap.delete(_id);
        this.watchingMap.set(_id, watching);
        (isAiring ? this.airings : this.ends)[i] = watching;
        this.click(_id);
      } else {
        alert('오류가 발생하였습니다.');
        this.flashMessage.showFlashMessage({
          messages: ['오류가 발생하였습니다.'],
          type: 'danger',
          timeout: 3000
        });
      }
    });
  }

  write() {
    let date = new Date();
    let year = date.getFullYear();
    let qtr = Math.floor((date.getMonth() + 4) / 3);
    this.closeAllEdit();
    this.writing = {
      title: {
        kor: '',
        eng: '',
        jpn: '',
        rv: 'kor'
      },
      premiered: {
        year: year,
        quarter: qtr
      },
      broadcast: undefined,
      type: 'tva',
      memo: '',
      mal_id: 0,
      img: '',
      aired: '',
      studios: []
    };
  }

  onWriteSubmit() {
    if ( !isOK(this.writing, ['memo', 'ohli_id', '_id', 'modifying', 'opened']) || !isOK(this.studios) ) return notOK(['빈 필드가 있습니다.']);

    this.writing.studios = this.studios.trim().split('\n');
    this.watchingService.addWatching(this.writing).subscribe(result => {
      if ( result._id ) {
        this.watchingMap.set(result._id, result);
        if ( result.ohli_id ) {
          this.airings.push(result);
          this.align(0);
        } else {
          this.ends.push(result);
          this.align(1);
        }
        alert('추가되었습니다.');
        this.writing = null;
        this.click(result._id);
        let el = document.getElementById(result._id);
        try { el.scrollIntoView() } catch(e) {}

        if ( this.plan_id ) {
          this.planService.remove(this.plan_id).subscribe(err => {
            if ( err ) alert('원래의 목록에서 지우던 도중 오류가 발생하였습니다.');
            else this.plan_id = null;
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
    });
  }

  remove(_id: string, i: number, isAiring: boolean) {
    if ( !confirm('삭제하시겠습니까?') ) return;
    this.watchingService.removeWatching(_id).subscribe(err => {
      if ( err ) {
        this.flashMessage.showFlashMessage({
          messages: ['오류가 발생하였습니다.'],
          type: 'danger',
          timeout: 3000
        });
        return false;
      } else {
        this.watchingMap.delete(_id);
        (isAiring ? this.airings : this.ends).splice(i, 1);
      }
    });
  }

  openAll() {
    this.watchingMap.forEach((value, key) => {
      if ( !value.opened ) this.click(key);
    });
  }

  closeAll() {
    this.watchingMap.forEach((value, key) => {
      if ( value.opened ) this.click(key);
    });
  }

  getToday(): string {
    let date = new Date();
    return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
  }

  getDate(dateString: string): string {
    let today = new Date();
    let given = new Date(dateString);

    if ( given.getMonth() == today.getMonth() && given.getDate() == today.getDate() )
      return dateString.substring(11);
    else
      return `${given.getMonth()+1}/${given.getDate()}`;
  }

  getDay(broadcast: Broadcast): string {
    const f = (n: number): string => { return n >= 10 ? `${n}` : `0${n}` };
    return `${this.days[broadcast.day]} ${f(broadcast.hour)}:${f(broadcast.minute)}`;
  }

  getSize(size: number): string {
    const dividedSize = Math.round(size / 1024 / 1024);
    if ( dividedSize >= 1000 ) return (dividedSize / 1024).toFixed(2) + 'GB';
    else return dividedSize + 'MB';
  }

  findByStudio(studio: string) {
    this.dialog.open(StudioDialogComponent, {data: studio});
  }

  openTodayAiring() {
    this.closeAll();
    const today = new Date();
    const broadcast: Broadcast = {
      day: today.getDay(),
      hour: today.getHours(),
      minute: today.getMinutes()
    };
    let flag: boolean = false;
    for (let airing of this.airings) {
      if ( !airing.broadcast ) continue;
      else if ( broadcast.day == airing.broadcast.day ) {
        if ( broadcast.hour > airing.broadcast.hour || (broadcast.hour == airing.broadcast.hour && broadcast.minute >= airing.broadcast.minute) ) {
          this.click(airing._id);
          flag = true;
        }
      } else if ( (broadcast.day + 6) % 7 == airing.broadcast.day ) {
        if ( broadcast.hour < airing.broadcast.hour || (broadcast.hour == airing.broadcast.hour && broadcast.minute <= airing.broadcast.minute ) ) {
          this.click(airing._id);
          flag = true;
        }
      }
    }

    if ( !flag ) {
      this.flashMessage.showFlashMessage({
        messages: [`24시간 이내 방영 항목이 없습니다.`],
        type: 'danger',
        timeout: 3000
      });
    }
  }

}
