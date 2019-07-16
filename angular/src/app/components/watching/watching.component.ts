import { Component, OnInit } from '@angular/core';
import { Watching } from 'src/app/models/watching';
import { WatchingService } from 'src/app/services/watching.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watching',
  templateUrl: './watching.component.html',
  styleUrls: ['./watching.component.css']
})
export class WatchingComponent implements OnInit {
  watchings: Watching[] = null;

  constructor(
    private watchingService: WatchingService,
    private route: ActivatedRoute
  ) {
    this.watchingService.getWatchings().subscribe(watchings => {
      this.watchings = watchings;
      setTimeout(() => this.scrollToElement(), 500); // to wait for page loading
    });
  }

  private scrollToElement() {
    if ( this.route.snapshot.paramMap.get('_id') ) {
      const _id = this.route.snapshot.paramMap.get('_id');
      let idx = -1;
      for (let i=0; i<this.watchings.length; i++) {
        if ( this.watchings[i]._id == _id ) {
          idx = i;
          break;
        }
      }
      if ( idx == -1 ) return;
      this.clickWatching(idx);
      let element: HTMLElement = document.getElementById('tva' + idx);
      try {
        element.scrollIntoView();
      } catch(e) {
        alert('알 수 없는 에러가 발생하였습니다.\n' + e);
      }
    }
  }

  clickWatching(w: number) {
    if ( this.watchings[w].opened ) this.watchings[w].opened = false;
    else this.watchings[w].opened = true;
  }

  ngOnInit() {
  }

}
