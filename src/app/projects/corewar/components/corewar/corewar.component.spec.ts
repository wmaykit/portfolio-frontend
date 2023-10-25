import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorewarComponent } from './corewar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CorewarComponent', () => {
  let component: CorewarComponent;
  let fixture: ComponentFixture<CorewarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorewarComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorewarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
