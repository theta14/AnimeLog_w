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
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  selectItem(i: number) {
    this.loading = true;
    this.searchService.mal(this.searches[i].mal_id).subscribe(malSearched => {
      this.data.malSearched = malSearched;
      this.loading = false;
      this.onClose();
    });
  }

}
