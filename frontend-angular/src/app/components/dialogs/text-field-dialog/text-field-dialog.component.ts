import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-text-field-dialog',
  templateUrl: './text-field-dialog.component.html',
  styleUrls: ['./text-field-dialog.component.css']
})
export class TextFieldDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TextFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendingTextProtocol
  ) { }

  onClose() {
    this.dialogRef.close();
  }

}

export interface SendingTextProtocol {
  title: string,
  explain: string,
  text: string,
  placeholder: string
}
