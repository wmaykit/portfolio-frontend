import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSwapArticleComponent } from './push-swap-article.component';

describe('PushSwapArticleComponent', () => {
  let component: PushSwapArticleComponent;
  let fixture: ComponentFixture<PushSwapArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSwapArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSwapArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
