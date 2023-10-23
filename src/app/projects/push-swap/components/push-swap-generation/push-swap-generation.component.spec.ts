import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSwapGenerationComponent } from './push-swap-generation.component';

describe('PushSwapGenerationComponent', () => {
  let component: PushSwapGenerationComponent;
  let fixture: ComponentFixture<PushSwapGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushSwapGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushSwapGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
