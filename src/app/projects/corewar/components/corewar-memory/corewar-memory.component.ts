import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'portfolio-corewar-memory',
  templateUrl: './corewar-memory.component.html',
  styleUrls: ['./corewar-memory.component.css']
})
export class CorewarMemoryComponent {
  protected readonly Array = Array;
  @ViewChild('table') private table: ElementRef | undefined;
  private _memory: string[] = [];

  @Input()
  set memory(memory: string[]) {
    if ((this._memory = memory)) {
      let stack = [...memory];
      let table: HTMLTableElement = this.table?.nativeElement;
      for (let i = 0; i < table?.rows.length; i++) {
        const cells = table.rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
          cells[j].textContent = stack.shift() || '!!';
        }
      }
    }
  }

  get memory(): string[] {
    return this._memory;
  }

  constructor() {
  }


}
