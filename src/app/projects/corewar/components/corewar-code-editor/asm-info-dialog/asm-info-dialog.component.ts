import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

class DialogData {
}

@Component({
  selector: 'portfolio-asm-info-dialog',
  templateUrl: './asm-info-dialog.component.html',
  styleUrls: ['./asm-info-dialog.component.css']
})
export class AsmInfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

}
