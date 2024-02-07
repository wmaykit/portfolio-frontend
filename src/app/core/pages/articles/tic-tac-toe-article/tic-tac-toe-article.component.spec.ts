import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacToeArticleComponent } from './tic-tac-toe-article.component';

describe('TicTacToeArticleComponent', () => {
  let component: TicTacToeArticleComponent;
  let fixture: ComponentFixture<TicTacToeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacToeArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicTacToeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
