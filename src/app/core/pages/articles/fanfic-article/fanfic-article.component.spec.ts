import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanficArticleComponent } from './fanfic-article.component';

describe('FanficArticleComponent', () => {
  let component: FanficArticleComponent;
  let fixture: ComponentFixture<FanficArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanficArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanficArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
