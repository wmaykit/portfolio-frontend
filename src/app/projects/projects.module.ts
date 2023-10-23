import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushSwapComponent } from './push-swap/components/push-swap/push-swap.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PushSwapPageComponent } from './push-swap/pages/push-swap-page/push-swap-page.component';
import {
  PushSwapGenerationComponent
} from './push-swap/components/push-swap-generation/push-swap-generation.component';
import { TestComponent } from './push-swap/components/test/test.component';
import { MatButtonModule } from '@angular/material/button';
import { PushSwapApiService } from './push-swap/http/push-swap-api.service';
import { CorewarComponent } from './corewar/components/corewar/corewar.component';
import { CorewarMemoryComponent } from './corewar/components/corewar-memory/corewar-memory.component';
import { ManipulationInfoComponent } from './corewar/components/manipulation-info/manipulation-info.component';
import { GameInfoComponent } from './corewar/components/game-info/game-info.component';
import { CorewarCodeEditorComponent } from './corewar/components/corewar-code-editor/corewar-code-editor.component';
import { AsmInfoDialogComponent } from './corewar/components/corewar-code-editor/asm-info-dialog/asm-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [PushSwapComponent, PushSwapPageComponent, PushSwapGenerationComponent, TestComponent, CorewarComponent, CorewarMemoryComponent, ManipulationInfoComponent, GameInfoComponent, CorewarCodeEditorComponent, AsmInfoDialogComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [
    PushSwapApiService
  ]
})
export class ProjectsModule { }
