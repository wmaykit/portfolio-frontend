import { Routes } from '@angular/router';
import { PushSwapComponent } from './projects/push-swap/components/push-swap/push-swap.component';
import { MainComponent } from './core/pages/main/main.component';
import { CorewarComponent } from './projects/corewar/components/corewar/corewar.component';
import {
  CorewarCodeEditorComponent
} from './projects/corewar/components/corewar-code-editor/corewar-code-editor.component';

export const routes: Routes = [
  { path: 'push-swap', component: PushSwapComponent },
  { path: 'corewar', component: CorewarComponent },
  { path: 'corewar-code-editor', component: CorewarCodeEditorComponent },
  { path: '', component: MainComponent }
]