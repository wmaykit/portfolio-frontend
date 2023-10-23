import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulationInfoComponent } from './manipulation-info.component';

describe('ManipulationInfoComponent', () => {
  let component: ManipulationInfoComponent;
  let fixture: ComponentFixture<ManipulationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulationInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
