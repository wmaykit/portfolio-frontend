import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtPrintfArticleComponent } from './ft-printf-article.component';

describe('FtPrintfArticleComponent', () => {
  let component: FtPrintfArticleComponent;
  let fixture: ComponentFixture<FtPrintfArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtPrintfArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtPrintfArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
