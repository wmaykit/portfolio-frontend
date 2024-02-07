import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocobanArticleComponent } from './socoban-article.component';

describe('SocobanArticleComponent', () => {
  let component: SocobanArticleComponent;
  let fixture: ComponentFixture<SocobanArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocobanArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocobanArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
