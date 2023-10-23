import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorewarMemoryComponent } from './corewar-memory.component';

describe('CorewarMemoryComponent', () => {
  let component: CorewarMemoryComponent;
  let fixture: ComponentFixture<CorewarMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorewarMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorewarMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
