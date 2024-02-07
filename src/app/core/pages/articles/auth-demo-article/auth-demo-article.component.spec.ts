import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDemoArticleComponent } from './auth-demo-article.component';

describe('AuthDemoArticleComponent', () => {
  let component: AuthDemoArticleComponent;
  let fixture: ComponentFixture<AuthDemoArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDemoArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthDemoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
