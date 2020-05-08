import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './result.component.html',
})
export class ResultComponent {

  constructor(public dialogRef: MatDialogRef<ResultComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(){
    this.dialogRef.close();
  }
}
