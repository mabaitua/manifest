import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMdComponent } from './button-md.component';

describe('ButtonMdComponent', () => {
  let component: ButtonMdComponent;
  let fixture: ComponentFixture<ButtonMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
