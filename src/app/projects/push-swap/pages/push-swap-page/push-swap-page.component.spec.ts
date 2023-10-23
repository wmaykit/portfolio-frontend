import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSwapPageComponent } from './push-swap-page.component';

describe('PushSwapPageComponent', () => {
  let component: PushSwapPageComponent;
  let fixture: ComponentFixture<PushSwapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSwapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSwapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
