import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorsArticleComponent } from './rock-paper-scissors-article.component';

describe('RockPaperScissorsArticleComponent', () => {
  let component: RockPaperScissorsArticleComponent;
  let fixture: ComponentFixture<RockPaperScissorsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockPaperScissorsArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockPaperScissorsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
