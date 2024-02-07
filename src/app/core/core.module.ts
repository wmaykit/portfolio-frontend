import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PortfolioArticleComponent } from './pages/articles/portfolio-article/portfolio-article.component';
import { FanficArticleComponent } from './pages/articles/fanfic-article/fanfic-article.component';
import { AuthDemoArticleComponent } from './pages/articles/auth-demo-article/auth-demo-article.component';
import { TicTacToeArticleComponent } from './pages/articles/tic-tac-toe-article/tic-tac-toe-article.component';
import { RockPaperScissorsArticleComponent } from './pages/articles/rock-paper-scissors-article/rock-paper-scissors-article.component';
import { SocobanArticleComponent } from './pages/articles/socoban-article/socoban-article.component';
import { PushSwapArticleComponent } from './pages/articles/push-swap-article/push-swap-article.component';
import { CorewarArticleComponent } from './pages/articles/corewar-article/corewar-article.component';
import { FillitArticleComponent } from './pages/articles/fillit-article/fillit-article.component';
import { LemInArticleComponent } from './pages/articles/lem-in-article/lem-in-article.component';
import { FtPrintfArticleComponent } from './pages/articles/ft-printf-article/ft-printf-article.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    PortfolioArticleComponent,
    FanficArticleComponent,
    AuthDemoArticleComponent,
    TicTacToeArticleComponent,
    RockPaperScissorsArticleComponent,
    SocobanArticleComponent,
    PushSwapArticleComponent,
    CorewarArticleComponent,
    FillitArticleComponent,
    LemInArticleComponent,
    FtPrintfArticleComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatTreeModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class CoreModule { }
