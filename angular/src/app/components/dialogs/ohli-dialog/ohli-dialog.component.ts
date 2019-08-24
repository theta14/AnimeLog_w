import { Component, Inject } from '@angular/core';
import { Ohli, SendingOhliProtocol } from 'src/app/models/ohli';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WatchingService } from 'src/app/services/watching.service';

@Component({
  selector: 'app-ohli-dialog',
  templateUrl: './ohli-dialog.component.html',
  styleUrls: ['./ohli-dialog.component.css']
})
export class OhliDialogComponent {
  loading: boolean = true;
  ohlis: Ohli[];

  constructor(
    public dialogRef: MatDialogRef<OhliDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendingOhliProtocol,
    private watchingService: WatchingService
  ) {
    this.watchingService.ohli(this.data.title).subscribe(ohlis => {
      this.ohlis = ohlis;
      this.loading = false;
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  selectItem(i: number) {
    this.data.ohli_id = this.ohlis[i].id;
    this.onClose();
  }

}
