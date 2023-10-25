import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSwapComponent } from './push-swap.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PushSwapComponent', () => {
  let component: PushSwapComponent;
  let fixture: ComponentFixture<PushSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSwapComponent ],
      imports: [HttpClientTestingModule]
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
