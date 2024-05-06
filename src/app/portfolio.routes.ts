import { Routes } from '@angular/router';
import { PushSwapComponent } from './projects/push-swap/components/push-swap/push-swap.component';
import { MainComponent } from './core/pages/main/main.component';
import { CorewarComponent } from './projects/corewar/components/corewar/corewar.component';
import {
  CorewarCodeEditorComponent
} from './projects/corewar/components/corewar-code-editor/corewar-code-editor.component';
import { AboutComponent } from './core/pages/about/about.component';
import { ProjectsComponent } from './core/pages/projects/projects.component';
import { PortfolioArticleComponent } from './core/pages/articles/portfolio-article/portfolio-article.component';
import { AuthDemoArticleComponent } from './core/pages/articles/auth-demo-article/auth-demo-article.component';
import { TicTacToeArticleComponent } from './core/pages/articles/tic-tac-toe-article/tic-tac-toe-article.component';
import {
  RockPaperScissorsArticleComponent
} from './core/pages/articles/rock-paper-scissors-article/rock-paper-scissors-article.component';
import { SocobanArticleComponent } from './core/pages/articles/socoban-article/socoban-article.component';
import { PushSwapArticleComponent } from './core/pages/articles/push-swap-article/push-swap-article.component';
import { CorewarArticleComponent } from './core/pages/articles/corewar-article/corewar-article.component';
import { FillitArticleComponent } from './core/pages/articles/fillit-article/fillit-article.component';
import { LemInArticleComponent } from './core/pages/articles/lem-in-article/lem-in-article.component';
import { FtPrintfArticleComponent } from './core/pages/articles/ft-printf-article/ft-printf-article.component';
import { FanficArticleComponent } from './core/pages/articles/fanfic-article/fanfic-article.component';
import { SkillsComponent } from './core/pages/skills/skills.component';
import { ContactsComponent } from './core/pages/contacts/contacts.component';

const PROJECTS_PATH = 'projects';

export const routes: Routes = [
  { path: 'push-swap', component: PushSwapComponent },
  { path: 'corewar', component: CorewarComponent },
  { path: 'corewar-code-editor', component: CorewarCodeEditorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: PROJECTS_PATH, component: ProjectsComponent },
  { path: `${PROJECTS_PATH}/kabanyok-artyom_fun`, component: PortfolioArticleComponent },
  { path: `${PROJECTS_PATH}/fanfic`, component: FanficArticleComponent },
  { path: `${PROJECTS_PATH}/auth_demo`, component: AuthDemoArticleComponent },
  { path: `${PROJECTS_PATH}/tic_tac_toe`, component: TicTacToeArticleComponent },
  { path: `${PROJECTS_PATH}/rock_paper_scissors`, component: RockPaperScissorsArticleComponent },
  { path: `${PROJECTS_PATH}/sokoban`, component: SocobanArticleComponent },
  { path: `${PROJECTS_PATH}/push_swap`, component: PushSwapArticleComponent },
  { path: `${PROJECTS_PATH}/corewar`, component: CorewarArticleComponent },
  { path: `${PROJECTS_PATH}/fillit`, component: FillitArticleComponent },
  { path: `${PROJECTS_PATH}/lem-in`, component: LemInArticleComponent },
  { path: `${PROJECTS_PATH}/ft_printf`, component: FtPrintfArticleComponent },
  { path: '', component: MainComponent }
]