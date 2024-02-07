import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillitArticleComponent } from './fillit-article.component';

describe('FillitArticleComponent', () => {
  let component: FillitArticleComponent;
  let fixture: ComponentFixture<FillitArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillitArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillitArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
