import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ItemTitle } from 'src/app/models/item';
import { WatchingVideo, Ohys, WatchingSubtitle } from 'src/app/models/watching';
import { WatchingService } from 'src/app/services/watching.service';
import { SearchService } from 'src/app/services/search.service';
import { SendingOhliProtocol } from 'src/app/models/ohli';
import { OhliDialogComponent } from '../ohli-dialog/ohli-dialog.component';

@Component({
  selector: 'app-ended-dialog',
  templateUrl: './ended-dialog.component.html',
  styleUrls: ['./ended-dialog.component.css']
})
export class EndedDialogComponent {
  year: number = undefined;

  videos: WatchingVideo[] = undefined;
  ohyses: Ohys[] = undefined;
  subtitles: WatchingSubtitle[] = [];

  constructor(
    public dialogRef: MatDialogRef<EndedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendingEndedProtocol,
    private watchingService: WatchingService,
    private searchService: SearchService,
    private dialog: MatDialog,
  ) {
    const title = this.data.title.eng;
    this.searchService.mal(this.data.mal_id).subscribe(malSearched => {
      if ( !malSearched.aired.end ) {
        alert('종영 연도를 찾을 수 없습니다.\n현재 방영 중인 항목일 수도 있습니다.');
        this.year = new Date().getFullYear();
        this.videos = this.ohyses = [];
      } else {
        this.year = new Date(malSearched.aired.end).getFullYear()
        this.watchingService.getVideos(title).subscribe(videos => this.videos = videos);
        this.watchingService.getOhys(title).subscribe(ohyses => this.ohyses = ohyses);
      }
    });
  }

  findOhliId() {
    const data: SendingOhliProtocol = {title: this.data.title.kor, ohli_id: null, year: this.year};
    const dialogRef = this.dialog.open(OhliDialogComponent, {data: data});
    dialogRef.afterClosed().subscribe(() => {
      if ( data.ohli_id ) {
        this.subtitles = undefined;
        this.watchingService.getSubtitles(data.ohli_id).subscribe(subtitles => this.subtitles = subtitles);
      }
    });
  }

  getDate(dateString: string): string {
    let today = new Date();
    let given = new Date(dateString);
    if ( given.getMonth() == today.getMonth() && given.getDate() == today.getDate() )
      return dateString.substring(11);
    else
      return `${given.getMonth()+1}/${given.getDate()}`;
  }

  getSize(size: number): string {
    const dividedSize = Math.round(size / 1024 / 1024);
    if ( dividedSize >= 1000 ) return (dividedSize / 1024).toFixed(2) + 'GB';
    else return dividedSize + 'MB';
  }

  onClose() {
    this.dialogRef.close();
  }

}

interface SendingEndedProtocol {
  title: ItemTitle,
  mal_id: number,
  img: string
}
