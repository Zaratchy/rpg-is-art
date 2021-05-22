import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CguRegisterComponent } from './cgu-register.component';

describe('CguRegisterComponent', () => {
  let component: CguRegisterComponent;
  let fixture: ComponentFixture<CguRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CguRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CguRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
