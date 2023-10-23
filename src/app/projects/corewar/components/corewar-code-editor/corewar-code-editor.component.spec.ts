import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorewarCodeEditorComponent } from './corewar-code-editor.component';

describe('CorewarCodeEditorComponent', () => {
  let component: CorewarCodeEditorComponent;
  let fixture: ComponentFixture<CorewarCodeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorewarCodeEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorewarCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
