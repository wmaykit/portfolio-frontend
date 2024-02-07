import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemInArticleComponent } from './lem-in-article.component';

describe('LemInArticleComponent', () => {
  let component: LemInArticleComponent;
  let fixture: ComponentFixture<LemInArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemInArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LemInArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
