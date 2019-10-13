import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SendingSearchedProtocol, Searched } from 'src/app/models/searched';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent {
  loading: boolean = true;
  searches: Searched[];

  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendingSearchedProtocol,
    private searchService: SearchService
  ) {
    this.searchService.search(this.data.search.text, this.data.search.option).subscribe(searches => {
      this.searches = searches;
      this.loading = false;
    }, err => {
      alert('검색 도중 에러가 발생하였습니다.\n' + err.name + '\n' + err.statusText);
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  selectItem(i: number) {
    this.loading = true;
    this.searchService.mal(this.searches[i].mal_id).subscribe(malSearched => {
      this.data.malSearched = malSearched;
      if ( this.searches[i].title_kor ) this.data.malSearched.title.kor = this.searches[i].title_kor;
      this.loading = false;
      this.onClose();
    });
  }

  getLink(): string {
    if ( this.data.search.option == 'onnada' ) return 'http://onnada.com/search/?t=anime&q=' + encodeURI(this.data.search.text);
    else 'https://myanimelist.net/search/all?q=' + encodeURI(this.data.search.text);
  }

}
