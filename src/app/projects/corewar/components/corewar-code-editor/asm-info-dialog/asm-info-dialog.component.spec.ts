import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmInfoDialogComponent } from './asm-info-dialog.component';

describe('AsmInfoDialogComponent', () => {
  let component: AsmInfoDialogComponent;
  let fixture: ComponentFixture<AsmInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsmInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
