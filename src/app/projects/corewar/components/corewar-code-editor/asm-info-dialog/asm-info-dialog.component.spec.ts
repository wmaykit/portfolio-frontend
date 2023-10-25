import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmInfoDialogComponent } from './asm-info-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('AsmInfoDialogComponent', () => {
  let component: AsmInfoDialogComponent;
  let fixture: ComponentFixture<AsmInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsmInfoDialogComponent ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
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
