import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLgIconComponent } from './button-lg-icon.component';

describe('ButtonLgIconComponent', () => {
  let component: ButtonLgIconComponent;
  let fixture: ComponentFixture<ButtonLgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLgIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonLgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
