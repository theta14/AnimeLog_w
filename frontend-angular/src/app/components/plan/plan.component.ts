import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SearchService } from 'src/app/services/search.service';
import { Plan } from 'src/app/models/plan';
import { MalSearched, SendingSearchedProtocol, searchedProtocolFactory } from 'src/app/models/searched';
import { SearchDialogComponent } from '../dialogs/search-dialog/search-dialog.component';
import { cloneObject, notOK, isOK } from 'src/app/models/item';
import { HeaderAlign } from 'src/app/models/headerAlign';
import { TitleService } from 'src/app/services/title.service';
import { StudioDialogComponent } from '../dialogs/studio-dialog/studio-dialog.component';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent extends HeaderAlign<Plan> implements OnInit {
  plans: Plan[];
  planMap: Map<string, Plan>;

  loading: boolean = false;
  writing: Plan = null;
  studios: string = null;

  constructor(
    private planService: PlanService,
    private route: ActivatedRoute,
    private flashMessage: NgFlashMessageService,
    private dialog: MatDialog,
    private searchService: SearchService,
    private titleService: TitleService,
    private router: Router
  ) {
    super([1], [4]);
    this.titleService.setTitle('시청 예정');
    this.planService.getPlans().subscribe(plans => {
      this.plans = plans;
      super.setItems([this.plans]);
      this.plans.sort((a, b) => { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) });
      this.planMap = new Map<string, Plan>();
      for (let plan of this.plans) this.planMap.set(plan._id, plan);
      setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
    });
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      this.click(_id);
      let element: HTMLElement = document.getElementById(_id);
      try {
        element.scrollIntoView();
      } catch(e) {
        alert('잘못된 ID값입니다: ' + _id);
      }
    }
  }

  protected getAlignment(standard: number) {
    switch(standard) {
      case 0: return (a: Plan, b: Plan) => { return a.type.localeCompare(b.type) * this.alignments[0][standard] }
      case 1: return (a: Plan, b: Plan) => { return a.title[a.title.rv].localeCompare(b.title[b.title.rv]) * this.alignments[0][standard] }
      case 2: return (a: Plan, b: Plan) => { return (a.studios[0] ? a.studios[0] : '-').localeCompare((b.studios[0] ? b.studios[0] : '-')) * this.alignments[0][standard] }
      case 3: return (a: Plan, b: Plan) => { return (new Date(a.aired ? a.aired : null).getTime() - new Date(b.aired ? b.aired : null).getTime()) * this.alignments[0][standard] }
      default: return;
    }
  }

  getQuarterFromAiredDate(aired: string): string {
    if ( !aired || aired == '' ) return '-';
    let date = new Date(aired);
    let year = date.getFullYear().toString().substring(2);
    let qtr = Math.floor((date.getMonth() + 4) / 3);
    return `'${year} - ${qtr}`;
  }

  click(_id: string) {
    let plan: Plan = this.planMap.get(_id);
    if ( !plan ) return;
    if ( plan.modifying ) return;
    plan.opened = !plan.opened;
  }

  ngOnInit() {
  }

  private searchedToItem(plan: Plan, malSearched: MalSearched) {
    if ( malSearched.title.kor ) plan.title.kor = malSearched.title.kor;
    plan.title.eng = malSearched.title.eng;
    plan.title.jpn = malSearched.title.jpn;
    plan.aired = malSearched.aired.start;
    plan.mal_id = malSearched.mal_id;
    plan.img = malSearched.img;
    plan.type = malSearched.type;
    this.studios = malSearched.studios.join('\n');
  }

  search(option: string, text: string, item: Plan) {
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
    if ( _id ) this.planMap.get(_id).modifying = null;
    this.writing = null;
    this.studios = '';
  }

  private closeAllEdit() {
    for (let plan of this.plans) if ( plan.modifying ) this.closeEdit(plan._id);
    this.closeEdit();
  }

  modify(_id: string) {
    this.closeAllEdit();
    this.planMap.get(_id).opened = false;
    let clone: Plan = cloneObject(this.planMap.get(_id));
    this.planMap.get(_id).modifying = clone;
    this.studios = this.planMap.get(_id).studios.join('\n');
  }

  onModifySubmit(_id: string, i: number) {
    if ( !confirm('저장하시겠습니까?') ) return;
    let plan: Plan = this.planMap.get(_id).modifying;
    if ( !isOK(plan.title[plan.title.rv]) ) return notOK(['대표가 되는 제목은 입력해야 합니다.']);
    plan.studios = this.studios.trim().split('\n');
    this.planService.modifyPlan(plan).subscribe(result => {
      if ( result._id ) {
        this.planMap.delete(_id);
        this.planMap.set(_id, plan);
        this.plans[i] = plan;
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
    this.closeAllEdit();
    let date = new Date();
    let year = date.getFullYear();
    let qtr = Math.floor((date.getMonth() + 4) / 3);
    this.writing = {
      title: {
        kor: '',
        eng: '',
        jpn: '',
        rv: 'kor'
      },
      type: 'tva',
      memo: '',
      mal_id: undefined,
      img: undefined,
      aired: '',
      studios: []
    };
  }

  onWriteSubmit() {
    if ( !isOK(this.writing.title[this.writing.title.rv]) ) return notOK(['대표가 되는 제목은 입력해야 합니다.']);

    let trim = this.studios.trim();
    if ( trim != '' ) this.writing.studios = trim.split('\n');
    this.planService.addPlan(this.writing).subscribe(result => {
      if ( result._id ) {
        alert('작성되었습니다.');
        this.planMap.set(result._id, result);
        this.plans.push(result);
        this.align();
        this.writing = null;
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

  done(_id: string) {
    this.router.navigate([`/${this.planMap.get(_id).type}/data-from-plan`, _id]);
  }

  remove(_id: string, i: number) {
    if ( !confirm('삭제하시겠습니까?') ) return;
    this.planService.removePlan(_id).subscribe(err => {
      if ( err ) {
        this.flashMessage.showFlashMessage({
          messages: ['오류가 발생하였습니다.'],
          type: 'danger',
          timeout: 3000
        });
        return false;
      } else {
        this.planMap.delete(_id);
        this.plans.splice(i, 1);
      }
    });
  }

  openAll() {
    this.planMap.forEach((value, key) => {
      if ( !value.opened ) this.click(key);
    });
  }

  closeAll() {
    this.planMap.forEach((value, key) => {
      if ( value.opened ) this.click(key);
    });
  }

  findByStudio(studio: string) {
    this.dialog.open(StudioDialogComponent, {data: studio});
  }

}
