import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as ace from 'ace-builds';
import { ASM_HEADER, KUZIA_CODE } from './kuzia-code';
import { MatDialog } from '@angular/material/dialog';
import { AsmInfoDialogComponent } from './asm-info-dialog/asm-info-dialog.component';
import { Ace } from 'ace-builds';
import Editor = Ace.Editor;
import { CorewarHttpService } from '../../http/corewar-http.service';
import { BehaviorSubject, finalize, skip, take } from 'rxjs';

@Component({
  selector: 'portfolio-corewar-code-editor',
  templateUrl: './corewar-code-editor.component.html',
  styleUrls: ['./corewar-code-editor.component.css']
})
export class CorewarCodeEditorComponent implements AfterViewInit {
  @ViewChild('editor') private editor: ElementRef<HTMLElement> | undefined;
  private aceEditor: Editor | undefined;

  compileChampion: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private dialog: MatDialog,
    private corewarHttpService: CorewarHttpService
  ) {
  }

  ngAfterViewInit(): void {
    // ace.config.set("fontSize", "14px");
    const aceEditor = ace.edit(this.editor?.nativeElement || {} as Element);
    this.aceEditor = aceEditor;
    aceEditor.session.setValue(KUZIA_CODE);
    this.compileChampion.subscribe((compile) => {
      console.log(compile);
      aceEditor.setReadOnly(compile);
    });
  }

  openInstructionsInfo() {
    this.dialog.open(AsmInfoDialogComponent);
  }

  clearEditor() {
    this.aceEditor?.session.setValue(ASM_HEADER);
  }

  compileAndSaveChampion() {
    this.compileChampion.next(true);
    const championCode = this.aceEditor?.session.getDocument().getValue();
    const championName = (/\.name "(.*)"/gm).exec(championCode || '')?.[1];

    this.corewarHttpService.compileChampion({championName, championCode})
      .pipe(finalize(() => {
        this.compileChampion.next(false)
      }))
      .subscribe((asmResult) => {
          console.log(asmResult);
        }
      );
  }

  protected readonly Boolean = Boolean;
}
