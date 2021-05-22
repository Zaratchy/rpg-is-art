import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarRegisterComponent } from './avatar-register.component';

describe('AvatarRegisterComponent', () => {
  let component: AvatarRegisterComponent;
  let fixture: ComponentFixture<AvatarRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
