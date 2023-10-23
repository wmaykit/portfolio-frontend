import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSwapComponent } from './push-swap.component';

describe('PushSwapComponent', () => {
  let component: PushSwapComponent;
  let fixture: ComponentFixture<PushSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSwapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
