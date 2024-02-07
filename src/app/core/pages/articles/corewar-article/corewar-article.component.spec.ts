import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorewarArticleComponent } from './corewar-article.component';

describe('CorewarArticleComponent', () => {
  let component: CorewarArticleComponent;
  let fixture: ComponentFixture<CorewarArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorewarArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorewarArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
